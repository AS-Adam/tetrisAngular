import { formatCurrency } from '@angular/common';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
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
    public color: string = 'normal';
    public contrastColor: boolean = false;
    constructor(private _router: Router, public fb: FormBuilder, private _route: ActivatedRoute) {
        this.loginForm = this.fb.group({
            email: ['', [Validators.required, Validators.email]],
            name: ['', [Validators.required, Validators.minLength(5)]]
        })
        // this.color = this._route.snapshot.params.color;
        this._route.params.subscribe(params => {
            this.color = params.color;
        })
    }
    public PlayerName;
    ngOnInit(): void {
    }


    submitForm(form): void {
        this.submit.emit(form.value);
        this._router.navigate([`/game/${this.color}`])

        PlayerData = form.value;
    }
    getPlayername() {
        return this.PlayerName;
    }
    selectColor(color): void {
        this.contrastColor = !this.contrastColor
        this._router.navigate([`/login-page/${color}`]);
    }
}


