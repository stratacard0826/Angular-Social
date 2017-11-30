import { Component, OnInit } from '@angular/core';
import _ from 'lodash';
import { LocalStorageService } from 'angular-2-local-storage';

import { PostService } from './../../../../service'
import { BroadcastService } from './../../../../shared/services/broadcast.service';


@Component({
	selector: 'post',
	templateUrl: './post.html',
	styleUrls: ['./post.scss']
})
export class PostComponent implements OnInit {
    postChangeEvent: any = "post_change"
    posts: any = [];
    allPosts: any = [];
    user: any;
    isExpandMore = false;

    constructor(private postService: PostService, private broadcastService: BroadcastService,
        private localStorageService: LocalStorageService) {

        this.user = localStorageService.get('user');        
        this.getPosts();


        broadcastService.on(this.postChangeEvent).subscribe((res) => {                       
            this.getPosts();
        });
    }

    ngOnInit(): void {
       

    }

    deletePost(postId)
    {
        this.broadcastService.displayLoader(true);
        this.postService.deletePost(postId).subscribe((res) => {
            this.broadcastService.displayLoader(false);            
            this.getPosts();
        });
    }

    getPosts(isSilentLoad = undefined) {

        if (!isSilentLoad)
        this.broadcastService.displayLoader(true);

        this.postService.getPosts().subscribe((res) => {
            this.broadcastService.displayLoader(false);
            this.posts = [];
            this.allPosts = [];
            res = _.sortBy(res, ['createdAt']).reverse();
            res.forEach((r) => {             
                var userAvatar = _.filter(r.author.media, { displayType: 'avatar' });                
                
                var post = {
                    username: r.author.username,
                    avatar: userAvatar.length > 0 ? userAvatar[0].link : r.author.profileImageThumbnail,
                    nickname: r.author.nickname,
                    text: r.text,
                    media: r.media,
                    likes: r.likes,
                    dislikes: r.dislikes,
                    numComments: r.numComments,
                    createdAt: r.createdAt,
                    updatedAt: r.updatedAt,
                    to: r.feeds.length > 0 ? r.feeds[0].name : '',
                    feedIds: r.feeds.length > 0 ? _.map(r.feeds, '_id') : [],
                    postId: r._id,
                    isLike: r.likesDictionary && r.likesDictionary[this.user.id] === 1,
                    isDislike: r.likesDictionary && r.likesDictionary[this.user.id] === -1
                }
                this.allPosts.push(post);
            });
            this.posts = _.take(this.allPosts, 2);
        });
    }

    onScroll() {

        var newPosts = _.take(this.allPosts.filter(item => _.filter(this.posts, { 'postId': item.postId }).length === 0), 1);
        if (newPosts && newPosts.length > 0)
            this.posts = _.concat(this.posts, newPosts);
    }

    onLike(post) {
        post.isLike = !post.isLike;
        post.isDislike = !post.isDislike;
        
        if (post.isLike) {
            post.likes++;
            this.postService.likePost(post.postId).subscribe((res) => {                
                this.getPosts(true);
            });
        }
        else { 
            post.likes--;
            this.postService.dislikePost(post.postId).subscribe((res) => {
                this.getPosts(true);
            });
        }
    }
   
    onPostComment(obj) {        
        _.filter(this.posts, { 'postId': obj.postId })[0].numComments += 1;
    }

}