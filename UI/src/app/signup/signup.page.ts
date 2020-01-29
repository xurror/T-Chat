import { Socket } from 'ngx-socket-io';
import { Storage } from '@ionic/storage';
import { Component, OnInit } from '@angular/core';
import { Platform, NavController } from '@ionic/angular';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})
export class SignupPage implements OnInit {

  private logoPath = "assets/imgs/chat.png";
  returnUrl: string;
  username: string;
  telephone: string;
  email: string;

  constructor(
    private socket: Socket,
    private storage: Storage,
    private platform: Platform,
    private navCtrl: NavController
  ) {
    if (!this.platform.is('cordova')) this.logoPath = `/${this.logoPath}`;
  }

  ngOnInit() {

  }

  createOrJoin() {
    this.storage.set('username', this.username);
    this.storage.set('telephone', this.telephone);
    this.storage.set('email', this.email);

    this.socket.connect();
    this.socket.emit('set-name', this.username);

    this.navCtrl.navigateForward('create-join');
  }

}
