import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage({
  name: 'colors'
})

@Component({
  selector: 'page-colors',
  templateUrl: 'colors.html',
})
export class ColorsPage {
  cards: any = [
    { title: "Yellow", image: "https://ionicframework.com/dist/preview-app/www/assets/img/card-saopaolo.png", sound: "fruits" },
    { title: "Red", image: "https://ionicframework.com/dist/preview-app/www/assets/img/card-amsterdam.png", sound: "numbers" },
    { title: "Blue", image: "https://ionicframework.com/dist/preview-app/www/assets/img/card-sf.png", sound: "colors" },
    { title: "Orange", image: "https://ionicframework.com/dist/preview-app/www/assets/img/card-madison.png", sound: "animals" },
    { title: "Green", image: "https://ionicframework.com/dist/preview-app/www/assets/img/card-amsterdam.png", sound: "fthings" },
    { title: "White", image: "https://ionicframework.com/dist/preview-app/www/assets/img/card-amsterdam.png", sound: "fthings" },
    { title: "Black", image: "https://ionicframework.com/dist/preview-app/www/assets/img/card-amsterdam.png", sound: "fthings" },
    { title: "Pink", image: "https://ionicframework.com/dist/preview-app/www/assets/img/card-amsterdam.png", sound: "fthings" },
    { title: "Brown", image: "https://ionicframework.com/dist/preview-app/www/assets/img/card-amsterdam.png", sound: "fthings" },
    { title: "Purple", image: "https://ionicframework.com/dist/preview-app/www/assets/img/card-amsterdam.png", sound: "fthings" },

  ];
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FruitsPage');
  }

}
