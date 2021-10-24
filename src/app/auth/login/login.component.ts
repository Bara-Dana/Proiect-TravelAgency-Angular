import {Component, Inject, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {AuthService} from "../auth.service";
import {UserService} from "../../user/user.service";
import {Router} from "@angular/router";
import {LoginModel} from "../../models/login-model";
import {MAT_DIALOG_DATA} from "@angular/material/dialog";
import {DestinationModel} from "../../models/destination-model";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;


  constructor(private formBuilder: FormBuilder,
              private authService: AuthService,
              private userService: UserService,
              private router: Router) {
    this.loginForm = this.formBuilder.group({
      email: ['', Validators.email],
      password: ['', Validators.minLength(6)]
    });

  }

  ngOnInit(): void {

  }


  onLogin(): void {

    this.authService.login(this.loginForm.value).subscribe((response: any) => {
        console.log(response);

        this.userService.setUser(response);
        this.router.navigate(["/", "my-account"])


      }, (error) => {
        // console.log(error);
        alert(error.error);
      }
    );
  }
}


