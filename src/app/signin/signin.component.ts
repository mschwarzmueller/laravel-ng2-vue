import { Component, OnInit } from '@angular/core';
import { NgForm } from "@angular/forms";

import { AuthService } from "../auth.service";

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  constructor(private authService: AuthService) { }

  ngOnInit() {
  }

  onSignin(form: NgForm) {
    this.authService.signin(form.value.email, form.value.password)
      .subscribe(
        tokenData => console.log(tokenData),
        error => console.log(error)
      );
  }
}
