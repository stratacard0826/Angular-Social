var express = require('express');
var url = require('url');
var request = require('request');
var router = express.Router();

var defaultProfileImage = 'http://ustadium-media.s3.amazonaws.com/content/feed/81/9bb200294b11e7bb99538ff4cfc91a/master.jpg';

var socialShare = {
  appId: '2231777543',
  title:'uSTADIUM - Your Sports Hub',
  description: 'uSTADIUM is the all-in-one hub for you to connect with fans, topics and opinions you love (or hate)',
  siteName: 'uSTADIUM',
  url: 'http://www.ustadium.com',
  image: defaultProfileImage,
  imageAlt: 'ustadium',
  type: 'article'
},
  feedType = {
    New: '/',
    Hot: '/trending',
    subscribed: '/subscribed',
    created: '/created'
  };
var prod = process.env.NODE_ENV === 'production' ? true : false;
var base = prod ? "https://ustadium-api.herokuapp.com" : "https://ustadium-api-dev.herokuapp.com";

router.get('/feeds/:name', function(req, res, next) {
  res.locals.socialShare = socialShare;
  var single = '';
  requestFeedInfo(req.params.name, single, res, next)
}, function(req, res, next) {
  // console.log(res.locals.socialShare);
  res.render('index', { socialShare: res.locals.socialShare, prod: prod });
});

router.get('/feed/:name', function(req, res, next) {
  res.locals.socialShare = socialShare;
  var single = '/name/'
  requestFeedInfo(req.params.name, single, res, next)
}, function(req, res, next) {
  res.render('index', { socialShare: res.locals.socialShare, prod: prod });
});

router.get('/post/:id', function(req, res, next) {
  res.locals.socialShare = socialShare;

  requestPostInfo(req.params.id, req, res, next);
}, function (req, res, next) {
  res.render('index', { socialShare: res.locals.socialShare, isPost: true, prod: prod });
})

router.get('/', function(req, res, next) {
  var ua = req.headers['user-agent'];

  if (/^(facebookexternalhit)|(Twitterbot)|(Pinterest)/gi.test(ua)) {
    console.log(ua,' is a bot');
  }
  res.render('index', { socialShare: socialShare, prod: prod });
});

router.get('*', function(req, res, next) {
  res.render('index', { socialShare: socialShare, prod: prod });
});


function requestFeedInfo(feedName, single, res, next) {
  var isSingle = !single ? feedType[feedName] : feedName;
  var requestEnd = '' + single + isSingle;
  request({
    uri: base + '/api/feeds'+ requestEnd ,
    method: 'GET'
  }, function (error, response, feed) {
    if(typeof feed != undefined) {
      var feedJson = JSON.parse(feed);
      // console.log(feedJson);
      if (feedJson.data && typeof feedJson.data.mediaFileThumbnail != undefined) {
        res.locals.socialShare.image = feedJson.data.mediaFileThumbnail;
      }

      if (feedJson.data && typeof feedJson.data.name !== undefined) {
        res.locals.socialShare.title = feedJson.data.name;
      }

      if (feedJson.data && typeof feedJson.data.description !== undefined) {
        res.locals.socialShare.description = feedJson.data.description;
      }

      if (feedJson.data && typeof feedJson.data.mediaFileThumbnail !== undefined) {
        res.locals.socialShare.url = feedJson.data.mediaFileThumbnail;
      }
    }
    next();
  })

}

function requestPostInfo(postId, req, res, next) {
  var requestEnd = '' + postId;
  request({
    uri: base + '/api/posts/'+ requestEnd ,
    method: 'GET'
  }, function (error, response, feed) {
    if(response.statusCode === 200 && feed != undefined ) {
      if(feed.indexOf('<') == -1) {
        var feedJson = JSON.parse(feed);
        if (feedJson && feedJson.data && feedJson.data.author && feedJson.data.author.username) {
          res.locals.socialShare.imageAlt = feedJson.data.author.username;
        }
        if (feedJson && feedJson.data && feedJson.data.author && feedJson.data.author.profileImageThumbnail) {
          res.locals.socialShare.image = feedJson.data.author.profileImageThumbnail ? feedJson.data.author.profileImageThumbnail : defaulProfileImage;
        }

        if (feedJson && feedJson.data && feedJson.data.author && feedJson.data.author.nickname) {
          res.locals.socialShare.title = feedJson.data.author.nickname + ' on uSTADIUM';
        }

        if (feedJson && feedJson.data && feedJson.data.text) {
          res.locals.socialShare.description = feedJson.data.text;
        }

        var fullUrl = req.protocol + '://' + req.get('host') + req.originalUrl;
        res.locals.socialShare.url = fullUrl;
      }else{
        res.redirect('/');
      }
    }
    next();
  })

}
module.exports = router;
