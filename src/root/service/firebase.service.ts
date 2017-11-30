import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import { LocalStorageService } from 'angular-2-local-storage';

import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFirestore } from 'angularfire2/firestore';

import * as firebase from 'firebase';

import { ApiGateway } from './api-gateway.constant';



@Injectable()
export class FirebaseService {
    private user: any;
    private firebaseUid: any;
    private storageRef: any;

    constructor(private http: Http,
        private fireAuth: AngularFireAuth,
        private firestore: AngularFirestore,
        private localStorageService: LocalStorageService        
    ) {

        this.user = localStorageService.get('user');
        this.firebaseUid = localStorageService.get('firebase-uid');

        this.storageRef = firebase.storage().ref();        
    }


    upload(file, kind, displayType) {
        var timeStamp = Date.now();

        console.log('timeStamp', timeStamp);

        var mediaType = "images";

        if (kind == "Audio")
            mediaType = "audios";
        if (kind == "Video")
            mediaType = "videos";
           


        return this.storageRef.child(`users/${this.firebaseUid}/${mediaType}/${timeStamp}/${displayType}/${file.name}`).put(file).then((res) => {
            console.log('res', res);
            var metadata = res.metadata;
            console.log('res UploadTaskSnapshot', metadata);
            
           var media = {
               kind: kind,
               text:'',
               name: metadata.name,
               link: metadata.downloadURLs[0],
               displayType: displayType,
               quality: '1.0',
               size: metadata.size,
               duration: metadata.duration,
               width: metadata.width,
               height: metadata.height,
               isFlagged: false,
               mimeType: metadata.contentType
            };

           return media;
        });
    }

    singIn(token) {
        return this.fireAuth.auth.signInWithCustomToken(token).then((res) => {
            this.localStorageService.set('firebase-uid', res.uid);
            return res;
        }, (err) => {
            console.log('fire login err:', err);
        })
    }

    signout() {
        this.fireAuth.auth.signOut();
    }

}