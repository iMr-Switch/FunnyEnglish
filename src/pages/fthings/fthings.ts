import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { NativeAudio } from '@ionic-native/native-audio';
@IonicPage({
  name: 'fthings'
})

@Component({
  selector: 'page-fthings',
  templateUrl: 'fthings.html',
})
export class FthingsPage {
  cards: any = [
    { title: "Rainbow", image: "assets/imgs/fthings/rainbow.jpg", sound: "rainbow" },
    { title: "Cupcake", image: "assets/imgs/fthings/cupcake.jpg", sound: "cupcake" },
    { title: "Ghost", image: "assets/imgs/fthings/ghost.jpg", sound: "ghost" },
    { title: "Flowers", image: "assets/imgs/fthings/flowers.jpg", sound: "flowers" },
    { title: "Panda", image: "assets/imgs/fthings/panda.jpg", sound: "panda" },
    { title: "Clouds", image: "assets/imgs/fthings/cloud.jpg", sound: "cloud" },
    { title: "Ice Cream", image: "assets/imgs/fthings/icecream.jpg", sound: "icecream" },
    { title: "Cookies", image: "assets/imgs/fthings/cookies.jpg", sound: "cookies" },

  ];
  constructor(public navCtrl: NavController, public navParams: NavParams, private nativeAudio: NativeAudio) {
  }

  ionViewWillEnter() {
    this.nativeAudio.preloadSimple('rainbow', 'assets/audio/rainbow.mp3');
    this.nativeAudio.preloadSimple('cupcake', 'assets/audio/cupcake.mp3');
    this.nativeAudio.preloadSimple('ghost', 'assets/audio/ghost.mp3');
    this.nativeAudio.preloadSimple('flowers', 'assets/audio/flowers.mp3');
    this.nativeAudio.preloadSimple('panda', 'assets/audio/panda.mp3');
    this.nativeAudio.preloadSimple('cloud', 'assets/audio/cloud.mp3');
    this.nativeAudio.preloadSimple('icecream', 'assets/audio/icecream.mp3');
    this.nativeAudio.preloadSimple('cookies', 'assets/audio/cookies.mp3');

  }
 
  play(audio) {
    this.nativeAudio.play(audio);
  }

}
