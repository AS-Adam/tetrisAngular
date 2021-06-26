import { Component } from '@angular/core';
import { Router } from '@angular/router';

export interface Player {
  name: string;
  email: string;
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public player: Player;

  public constructor(private _router: Router) {
  }
  Game() {
    // this._router.navigate(['/game'])
  }
  public onFormSubmit(playerData) {
    this.player = playerData;

    this._router.navigate(['/game'])

  }
  public onGameClosed() {

    this._router.navigate(['/login-page'])
  }
}


