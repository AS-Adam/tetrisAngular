import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { TetrisCoreModule } from 'ngx-tetris';
// import { SortPipe } from './sort.pipe';
import { GameComponent } from './game/game.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { RouterModule } from "@angular/router";
import { HttpClientModule } from '@angular/common/http';
import { SortByScorePipe } from './sort-by-score.pipe';


@NgModule({
  declarations: [
    AppComponent,
    GameComponent,
    LoginPageComponent,
    SortByScorePipe,

  ],
  imports: [
    BrowserModule,
    TetrisCoreModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      { path: 'login-page/:color', component: LoginPageComponent },
      { path: 'game/:color', component: GameComponent },
      { path: '', redirectTo: '/login-page/normal', pathMatch: 'full' },
      { path: '**', redirectTo: '' }
    ]),
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
