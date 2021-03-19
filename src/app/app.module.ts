import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { TetrisCoreModule } from 'ngx-tetris';
// import { SortPipe } from './sort.pipe';
import { GameComponent } from './game/game.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { RouterModule } from "@angular/router";


@NgModule({
  declarations: [
    AppComponent,

    // SortPipe,
    GameComponent,
    LoginPageComponent,
  ],
  imports: [
    BrowserModule,
    TetrisCoreModule,
    FormsModule,
    RouterModule.forRoot([
      { path: 'login-page', component: LoginPageComponent },
      { path: 'game', component: GameComponent },
      { path: '', redirectTo: '/login-page', pathMatch: 'full' },
      { path: '**', redirectTo: '' }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
