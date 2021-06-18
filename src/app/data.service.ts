import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { PlayerData } from './login-page/login-page.component';
@Injectable({
  providedIn: 'root'
})
export class DataService {
  private _data = PlayerData;
  constructor(private _http: HttpClient) { }
  public getData() {
    return this._data;
  }
  public getScores() {
    return this._http.get('https://tetris.chrum.it/scores')
  }
}
