import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage({
  name: 'fthings'
})

@Component({
  selector: 'page-fthings',
  templateUrl: 'fthings.html',
})
export class FthingsPage {
  cards: any = [
    { title: "Unicorn", image: "https://ionicframework.com/dist/preview-app/www/assets/img/card-saopaolo.png", sound: "fruits" },
    { title: "Rainbow", image: "https://ionicframework.com/dist/preview-app/www/assets/img/card-amsterdam.png", sound: "numbers" },
    { title: "Cupcake", image: "https://ionicframework.com/dist/preview-app/www/assets/img/card-sf.png", sound: "colors" },
    { title: "Ghost", image: "https://ionicframework.com/dist/preview-app/www/assets/img/card-madison.png", sound: "animals" },
    { title: "Flowers", image: "https://ionicframework.com/dist/preview-app/www/assets/img/card-amsterdam.png", sound: "fthings" },
    { title: "Dinosaur", image: "https://ionicframework.com/dist/preview-app/www/assets/img/card-amsterdam.png", sound: "fthings" },
    { title: "Panda", image: "https://ionicframework.com/dist/preview-app/www/assets/img/card-amsterdam.png", sound: "fthings" },
    { title: "Clouds", image: "https://ionicframework.com/dist/preview-app/www/assets/img/card-amsterdam.png", sound: "fthings" },
    { title: "Ice Cream", image: "https://ionicframework.com/dist/preview-app/www/assets/img/card-amsterdam.png", sound: "fthings" },
    { title: "Cookies", image: "https://ionicframework.com/dist/preview-app/www/assets/img/card-amsterdam.png", sound: "fthings" },

  ];
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FruitsPage');
  }

}
