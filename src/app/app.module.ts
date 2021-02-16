import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { TetrisCoreModule } from 'ngx-tetris';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    TetrisCoreModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
