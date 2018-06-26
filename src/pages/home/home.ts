import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';

@IonicPage({
  name: 'home'
})

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  cards: any = [
    { title: "Fruits", subtitle: "Frutas", image: "https://ionicframework.com/dist/preview-app/www/assets/img/card-saopaolo.png", sound: "fruits" },
    { title: "Numbers", subtitle: "Números", image: "https://ionicframework.com/dist/preview-app/www/assets/img/card-amsterdam.png", sound: "numbers" },
    { title: "Colors", subtitle: "Colores", image: "https://ionicframework.com/dist/preview-app/www/assets/img/card-sf.png", sound: "colors" },
    { title: "Animals", subtitle: "Animales", image: "https://ionicframework.com/dist/preview-app/www/assets/img/card-madison.png", sound: "animals" },
    { title: "Funny Things", subtitle: "Cosas divertidas", image: "https://ionicframework.com/dist/preview-app/www/assets/img/card-amsterdam.png", sound: "fthings" },

  ];

  constructor(public navCtrl: NavController) {

  }

  openPagenAndPlay(page) {
    this.navCtrl.push(page);
    
  }
}
