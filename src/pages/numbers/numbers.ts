import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { NativeAudio } from '@ionic-native/native-audio';

@IonicPage({
  name: 'numbers'
})

@Component({
  selector: 'page-numbers',
  templateUrl: 'numbers.html',
})
export class NumbersPage {
  cards: any = [
    { title: "One", image: "assets/imgs/numbers/1.png", sound: "1" },
    { title: "Two", image: "assets/imgs/numbers/2.png", sound: "2" },
    { title: "Three", image: "assets/imgs/numbers/3.png", sound: "3" },
    { title: "Four", image: "assets/imgs/numbers/4.png", sound: "4" },
    { title: "Five", image: "assets/imgs/numbers/5.png", sound: "5" },
    { title: "Six", image: "assets/imgs/numbers/6.png", sound: "6" },
    { title: "Seven", image: "assets/imgs/numbers/7.png", sound: "7" },
    { title: "Eight", image: "assets/imgs/numbers/8.png", sound: "8" },
    { title: "Nine", image: "assets/imgs/numbers/9.png", sound: "9" },
    { title: "Ten", image: "assets/imgs/numbers/10.png", sound: "10" },

  ];
  constructor(public navCtrl: NavController, public navParams: NavParams, private nativeAudio: NativeAudio) {
  }
  ionViewWillEnter() {
    this.nativeAudio.preloadSimple('1', 'assets/audio/1.mp3');
    this.nativeAudio.preloadSimple('2', 'assets/audio/2.mp3');
    this.nativeAudio.preloadSimple('3', 'assets/audio/3.mp3');
    this.nativeAudio.preloadSimple('4', 'assets/audio/4.mp3');
    this.nativeAudio.preloadSimple('5', 'assets/audio/5.mp3');
    this.nativeAudio.preloadSimple('6', 'assets/audio/6.mp3');
    this.nativeAudio.preloadSimple('7', 'assets/audio/7.mp3');
    this.nativeAudio.preloadSimple('8', 'assets/audio/8.mp3');
    this.nativeAudio.preloadSimple('9', 'assets/audio/9.mp3');
    this.nativeAudio.preloadSimple('10', 'assets/audio/10.mp3');

  }

  play(audio) {
    this.nativeAudio.play(audio);
  }
  

}
