import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage({
  name: 'animals'
})

@Component({
  selector: 'page-animals',
  templateUrl: 'animals.html',
})
export class AnimalsPage {
  cards: any = [
    { title: "Dog", image: "https://ionicframework.com/dist/preview-app/www/assets/img/card-saopaolo.png", sound: "fruits" },
    { title: "Cat", image: "https://ionicframework.com/dist/preview-app/www/assets/img/card-amsterdam.png", sound: "numbers" },
    { title: "Horse", image: "https://ionicframework.com/dist/preview-app/www/assets/img/card-sf.png", sound: "colors" },
    { title: "Mice", image: "https://ionicframework.com/dist/preview-app/www/assets/img/card-madison.png", sound: "animals" },
    { title: "Duck", image: "https://ionicframework.com/dist/preview-app/www/assets/img/card-amsterdam.png", sound: "fthings" },
    { title: "Elephant", image: "https://ionicframework.com/dist/preview-app/www/assets/img/card-amsterdam.png", sound: "fthings" },
    { title: "Monkey", image: "https://ionicframework.com/dist/preview-app/www/assets/img/card-amsterdam.png", sound: "fthings" },
    { title: "Rabbit", image: "https://ionicframework.com/dist/preview-app/www/assets/img/card-amsterdam.png", sound: "fthings" },
    { title: "Bird", image: "https://ionicframework.com/dist/preview-app/www/assets/img/card-amsterdam.png", sound: "fthings" },
    { title: "Donkey", image: "https://ionicframework.com/dist/preview-app/www/assets/img/card-amsterdam.png", sound: "fthings" },

  ];
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FruitsPage');
  }

}
