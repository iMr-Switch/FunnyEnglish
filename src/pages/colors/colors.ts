import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { NativeAudio } from '@ionic-native/native-audio';

@IonicPage({
  name: 'colors'
})

@Component({
  selector: 'page-colors',
  templateUrl: 'colors.html',
})
export class ColorsPage {
  cards: any = [
    { title: "Yellow", image: "assets/imgs/colors/yellow.jpg", sound: "yellow" },
    { title: "Red", image: "assets/imgs/colors/red.jpg", sound: "red" },
    { title: "Blue", image: "assets/imgs/colors/blue.jpg", sound: "blue" },
    { title: "Orange", image: "assets/imgs/colors/orange.jpg", sound: "orange" },
    { title: "Green", image: "assets/imgs/colors/green.jpg", sound: "green" },
    { title: "White", image: "assets/imgs/colors/white.jpg", sound: "white" },
    { title: "Black", image: "assets/imgs/colors/black.jpg", sound: "black" },
    { title: "Pink", image: "assets/imgs/colors/pink.jpg", sound: "pink" },
    { title: "Brown", image: "assets/imgs/colors/brown.jpg", sound: "brown" },
    { title: "Purple", image: "assets/imgs/colors/purple.jpg", sound: "purple" },

  ];
  constructor(public navCtrl: NavController, public navParams: NavParams, private nativeAudio: NativeAudio) {
  }

  ionViewWillEnter() {
    this.nativeAudio.preloadSimple('yellow', 'assets/audio/yellow.mp3');
    this.nativeAudio.preloadSimple('red', 'assets/audio/red.mp3');
    this.nativeAudio.preloadSimple('blue', 'assets/audio/blue.mp3');
    this.nativeAudio.preloadSimple('orange', 'assets/audio/orange.mp3');
    this.nativeAudio.preloadSimple('green', 'assets/audio/green.mp3');
    this.nativeAudio.preloadSimple('white', 'assets/audio/white.mp3');
    this.nativeAudio.preloadSimple('black', 'assets/audio/black.mp3');
    this.nativeAudio.preloadSimple('pink', 'assets/audio/pink.mp3');
    this.nativeAudio.preloadSimple('brown', 'assets/audio/brown.mp3');
    this.nativeAudio.preloadSimple('purple', 'assets/audio/purple.mp3');

  }

  play(audio) {
    this.nativeAudio.play(audio);
  }

}
