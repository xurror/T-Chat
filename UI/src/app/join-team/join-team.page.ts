import { Socket } from 'ngx-socket-io';
import { Storage } from '@ionic/storage';
import { Component, OnInit } from '@angular/core';
import { Platform, NavController } from '@ionic/angular';

@Component({
  selector: 'app-join-team',
  templateUrl: './join-team.page.html',
  styleUrls: ['./join-team.page.scss'],
})
export class JoinTeamPage implements OnInit {

  private logoPath = "assets/imgs/chat.png";
  teamName: string;

  constructor(
    private platform: Platform,
    private navCtrl: NavController,
    private storage: Storage,
    private socket: Socket
  ) {
    if (!this.platform.is('cordova')) this.logoPath = `/${this.logoPath}`;
  }

  ngOnInit() {
  }

  join() {
    this.storage.set('teamName', this.teamName);
    this.socket.emit('room', this.teamName);
    this.navCtrl.navigateRoot('conversations');
  }

}
