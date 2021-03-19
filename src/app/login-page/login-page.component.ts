import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Player } from '../app.component';
@Component({
    selector: 'app-login-page',
    templateUrl: './login-page.component.html',
    styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {
    @Output() submit = new EventEmitter<Player>();

    constructor() { }

    ngOnInit(): void {

    }

    submitForm(form: FormGroup) {
        this.submit.emit(form.value);

    }
}


