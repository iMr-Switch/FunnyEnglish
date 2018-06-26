import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage({
  name: 'fruits'
})

@Component({
  selector: 'page-fruits',
  templateUrl: 'fruits.html',
})
export class FruitsPage {
  cards: any = [
    { title: "Apple", image: "https://ionicframework.com/dist/preview-app/www/assets/img/card-saopaolo.png", sound: "fruits" },
    { title: "Pineaple", image: "https://ionicframework.com/dist/preview-app/www/assets/img/card-amsterdam.png", sound: "numbers" },
    { title: "Grapes", image: "https://ionicframework.com/dist/preview-app/www/assets/img/card-sf.png", sound: "colors" },
    { title: "Cherry", image: "https://ionicframework.com/dist/preview-app/www/assets/img/card-madison.png", sound: "animals" },
    { title: "Banana", image: "https://ionicframework.com/dist/preview-app/www/assets/img/card-amsterdam.png", sound: "fthings" },
    { title: "Strawberry", image: "https://ionicframework.com/dist/preview-app/www/assets/img/card-amsterdam.png", sound: "fthings" },

  ];
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FruitsPage');
  }

}
