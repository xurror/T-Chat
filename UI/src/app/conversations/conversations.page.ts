import { Component, OnInit } from '@angular/core';
import { MenuController, ToastController } from '@ionic/angular';
import { Socket } from 'ngx-socket-io';
import { Storage } from '@ionic/storage';
import axios from 'axios';

@Component({
  selector: 'app-conversations',
  templateUrl: './conversations.page.html',
  styleUrls: ['./conversations.page.scss'],
})
export class ConversationsPage implements OnInit {

  title = 'Angular Chatroom';
  message: string;
  messages = [];
  users = [];
  currentUser: any;
  start_typing: any;

  constructor(
    private socket: Socket,
    private storage: Storage,
    private menu: MenuController,
    private toastCtrl: ToastController
    ) { }

  private showOptions: boolean = false;

  openFirst() {
    this.menu.enable(true, 'first');
    this.menu.open('first');
  }

  ngOnInit() {
    //this.socket.connect();

    let name = this.storage.get('username');
    this.currentUser = name;

    //this.socket.emit('set-name', name);

    this.socket.fromEvent('users-changed').subscribe(data => {
      let user = data['user'];
      if (data['event'] === 'left') {
        this.showToast('User left: ' + user);
      } else {
        this.showToast('User joined: ' + user);
      }
    });

    this.socket.fromEvent('message').subscribe(message => {
      this.messages.push(message);
    });
  }

  sendMessage() {
    const myRoom = this.storage.get('username');
    alert(myRoom)
    this.socket.emit('send-message', { text: this.message, room: myRoom });
    //alert(this.message);
    this.message = '';
  }

  ionViewWillLeave() {
    this.socket.disconnect();
  }

  async showToast(msg) {
    let toast = await this.toastCtrl.create({
      message: msg,
      position: 'top',
      duration: 2000
    });
    toast.present();
  }

  userTyping(event: any) {
    console.log(event);
    this.start_typing = event.target.value;
  }

}
