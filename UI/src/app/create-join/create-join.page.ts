import { Component, OnInit } from '@angular/core';
import { Platform, NavController } from '@ionic/angular';

@Component({
  selector: 'app-create-join',
  templateUrl: './create-join.page.html',
  styleUrls: ['./create-join.page.scss'],
})
export class CreateJoinPage implements OnInit {

  private logoPath = "assets/imgs/chat.png";

  constructor(
    private platform: Platform,
    private navCtrl: NavController
  ) {
    if (!this.platform.is('cordova')) this.logoPath = `/${this.logoPath}`;
  }

  ngOnInit() {
  }

  create() {
    this.navCtrl.navigateForward('create-team');
  }

  join() {
    this.navCtrl.navigateForward('join-team');
  }

  skip() {
    this.navCtrl.navigateRoot('conversations');
  }

}
