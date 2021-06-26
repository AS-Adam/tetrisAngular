import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { PlayerData, } from './login-page/login-page.component';
import { Observable } from 'rxjs';
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
    const headers = new HttpHeaders({
      accept: 'application/json',
      'Content-Type': 'application/json',
    });
    // const URL = 'http://localhost:57061/scores';
    const URL = 'http://tetris.chrum.it//scores';
    return this._http.get(URL, { headers })

  }
}
