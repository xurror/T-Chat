import { Socket } from 'ngx-socket-io';
import { Storage } from '@ionic/storage';
import { Component, OnInit } from '@angular/core';
import { Platform, NavController } from '@ionic/angular';

@Component({
  selector: 'app-create-team',
  templateUrl: './create-team.page.html',
  styleUrls: ['./create-team.page.scss'],
})
export class CreateTeamPage implements OnInit {

  private logoPath = "assets/imgs/chat.png";
  teamName: string;

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

  createTeam() {
    this.storage.set('teamName', this.teamName);
    alert(this.teamName)
    this.socket.emit('room', this.teamName);
    this.navCtrl.navigateRoot('conversations');
  }

}
