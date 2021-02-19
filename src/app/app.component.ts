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
  interval;
  add() {
    if (this.name.length > 0 && this.email.length > 0) {
      this.playerInfo.push(this.name);
      this.name;
    }
  }
  showTime(stat) {
    switch (stat) {
      case 'started':
        this.interval = setInterval(() => {
          this.time++;
        }, 1000);
        break;
      case 'stopped':

        clearInterval(this.interval);
        break;
      case 'ready':
        this.time = 0;
        clearInterval(this.interval);
        break;
    };
  }
  startGame(game) {
    game.actionStart();
    if (this.status != "started") {
      this.status = "started";
      this.showTime(this.status);
    }
  }
  pauseGame(game) {
    this.status = "stopped";
    game.actionStop();
    this.showTime(this.status);
  }
  gameCounter() {
    this.counter++;
  }
  endGame(game) {
    game.actionStop();
    this.playerInfo = [];
    this.name = "";
    this.email = "";
    this.counter = 0;
    this.status = "ready"
    this.showTime(this.status);
  }
  restartGame(game) {
    game.actionStop();
    this.startGame(game);
    game.actionReset();
    this.time = 0;
    this.counter = 0;
  }
}


