import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';
import { Player } from "../app.component";
// import { start } from 'repl';
@Component({
    selector: 'app-game',
    templateUrl: './game.component.html',
    styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit {
    @Input() playerData: Player;
    @Output() close = new EventEmitter();
    public counter = 0;
    status: string = "ready";
    constructor() { }

    ngOnInit(): void {
    }
    gameCounter() {
        this.counter++;
    }
    closeGame() {
        this.close.emit();
    }




    // public name: string;
    // color: string;
    // email: string;

    // playerInfo = [];
    // time: number = 0;
    // counter: number = 0;

    // interval;
    // showHistory: boolean = false;
    // history = [];
    // date;
    // a;
    // b;
    // public categories = [{ name: "started" }, { name: "stoped" }]
    // public selected;


    // add() {
    //   if (this.name.length > 0 && this.email.length > 0) {
    //     this.playerInfo.push(this.name);
    //   }
    // }
    // showTime(stat) {
    //   switch (stat) {
    //     case 'started':
    //       this.interval = setInterval(() => {
    //         this.time++;
    //       }, 1000);
    //       break;
    //     case 'stopped':

    //       clearInterval(this.interval);
    //       break;
    //     case 'ready':
    //       this.time = 0;
    //       clearInterval(this.interval);
    //       break;
    //   };
    // }
    startGame(game) {
        game.actionStart();
        // if (this.status != "started") {
        //     this.status = "started";
        //   this.showTime(this.status);
        //   this.history.push([
        //     this.status,
        //     this.date.getHours(),
        //     this.date.getMinutes(),
        //     this.date.getSeconds()]);
    }
    // }
    pauseGame(game) {
        this.status = "stopped";
        // this.date = new Date();
        game.actionStop();
        // this.showTime(this.status);
        // this.history.push(
        //   [this.status,
        //   this.date.getHours(),
        //   this.date.getMinutes(),
        //   this.date.getSeconds()
        //   ]);
    }
    // gameCounter() {
    //   this.counter++;
    // }
    // endGame(game) {
    //   game.actionStop();
    //   this.playerInfo = [];
    //   this.name = "";
    //   this.email = "";
    //   this.counter = 0;
    //   this.status = "ready"
    //   this.showTime(this.status);
    // }
    restartGame(game) {
        game.actionStop();
        // this.startGame(game);
        // game.actionReset();
        // this.time = 0;
        this.counter = 0;
    }
    // showGameHistory() {
    //   this.showHistory = !this.showHistory;
    // }
    // onCategoryClicked(category): void {
    //   this.selected = category;
    //   this.history.map((cat) => {
    //     if (this.history[cat] === this.selected) {
    //       this.history.push(cat)
    //     }
    //   })
    // }
}