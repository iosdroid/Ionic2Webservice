import { PostServiceProvider } from './../../providers/post-service/post-service';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the Repos page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-repos',
  templateUrl: 'repos.html',
})
export class ReposPage {

  constructor(public navCtrl: NavController, public navParams: NavParams,private postService:PostServiceProvider) {

    postService.postData().subscribe(data=>{
    console.log(data);
    },error => {
            console.log(error);
    });
  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad Repos');
  }

}
