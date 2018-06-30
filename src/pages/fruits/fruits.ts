import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { NativeAudio } from '@ionic-native/native-audio';

@IonicPage({
  name: 'fruits'
})

@Component({
  selector: 'page-fruits',
  templateUrl: 'fruits.html',
})
export class FruitsPage {
  cards: any = [
    { title: "Apple", image: "assets/imgs/fruits/apple.png", sound: "apple" },
    { title: "Pineaple", image: "assets/imgs/fruits/pineapple.png", sound: "pineapple" },
    { title: "Grapes", image: "assets/imgs/fruits/grapes.png", sound: "grapes" },
    { title: "Cherry", image: "assets/imgs/fruits/cherry.png", sound: "cherry" },
    { title: "Banana", image: "assets/imgs/fruits/banana.png", sound: "banana" },
    { title: "Strawberry", image: "assets/imgs/fruits/strawberry.png", sound: "strawberry" },
  ];
  
  constructor(public navCtrl: NavController, public navParams: NavParams, private nativeAudio: NativeAudio) {
  }

  ionViewWillEnter() {
    this.nativeAudio.preloadSimple('apple', 'assets/audio/apple.mp3');
    this.nativeAudio.preloadSimple('pineapple', 'assets/audio/pineapple.mp3');
    this.nativeAudio.preloadSimple('grapes', 'assets/audio/grapes.mp3');
    this.nativeAudio.preloadSimple('cherry', 'assets/audio/cherry.mp3');
    this.nativeAudio.preloadSimple('banana', 'assets/audio/banana.mp3');
    this.nativeAudio.preloadSimple('strawberry', 'assets/audio/strawberry.mp3');

  }
  play(audio) {
    this.nativeAudio.play(audio);
  }
}
