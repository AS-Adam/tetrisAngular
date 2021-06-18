import { formatCurrency } from '@angular/common';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Player } from '../app.component';

export let PlayerData = { name: "" };
@Component({
    selector: 'app-login-page',
    templateUrl: './login-page.component.html',
    styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {
    public loginForm: FormGroup;
    @Output() submit = new EventEmitter<Player>();

    constructor(private _router: Router, public fb: FormBuilder) {
        this.loginForm = this.fb.group({
            email: ['', [Validators.required, Validators.email]],
            name: ['', [Validators.required, Validators.minLength(5)]]
        })
    }
    public PlayerName;
    ngOnInit(): void {
    }

    // submitForm(form: FormGroup) {
    //     this.submit.emit(form.value);
    //     this._router.navigate(['/game'])
    //     // this.PlayerName = Player;
    //     PlayerData = form.value;

    // }
    submitForm(form): void {
        this.submit.emit(form.value);
        this._router.navigate(['/game'])
        // this.PlayerName = Player;
        PlayerData = form.value;
    }
    getPlayername() {
        return this.PlayerName;
    }

}


