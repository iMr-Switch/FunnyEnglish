import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';
import { NativeAudio } from '@ionic-native/native-audio';

@IonicPage({
  name: 'home'
})

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  cards: any = [
    { title: "Fruits", subtitle: "Frutas", image: "assets/imgs/fruits/fruits.jpg", sound: "fruits" },
    { title: "Numbers", subtitle: "Números", image: "assets/imgs/numbers/numbers.jpg", sound: "numbers" },
    { title: "Colors", subtitle: "Colores", image: "assets/imgs/colors/colors.jpg", sound: "colors" },
    { title: "Funny Things", subtitle: "Cosas divertidas", image: "assets/imgs/fthings/fthings.jpg", sound: "fthings" },

  ];

  constructor(public navCtrl: NavController, private nativeAudio: NativeAudio) {

  }

  ionViewWillEnter() {
    this.nativeAudio.preloadSimple('fruits', 'assets/audio/fruits.mp3');
    this.nativeAudio.preloadSimple('numbers', 'assets/audio/numbers.mp3');
    this.nativeAudio.preloadSimple('colors', 'assets/audio/colors.mp3');
    this.nativeAudio.preloadSimple('fthings', 'assets/audio/fthings.mp3');
  }
  openPagenAndPlay(page) {
    this.navCtrl.push(page);
    this.nativeAudio.play(page);        
  }
}
