import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name: string;
  color: string;
  email: string;
  playerInfo = [];
  time: number = 0;
  counter: number = 0;
  status: string = "ready";

  add() {
    if (this.name.length > 0 && this.email.length > 0) {
      this.playerInfo.push(this.name);
    }

  }

  showTime() {
    setInterval(() => { this.time++ }, 1000)
  }

  startGame(game) {
    game.actionStart();
    this.showTime();
    this.status = "started"
  }
  pauseGame(game) {
    game.actionStop();
    this.status = "stopped"
  }
  gameCounter() {
    this.counter++;
  }

  endGame(game) {
    console.log("wyłączyło")
    game.actionStop();
    this.playerInfo = [];
    this.name = "";
    this.email = "";
    this.counter = 0;
    this.status = "ready"

  }

}


