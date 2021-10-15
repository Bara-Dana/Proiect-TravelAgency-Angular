import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {AuthService} from "../auth.service";
import {UserService} from "../../user/user.service";
import {Router} from "@angular/router";

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

    this.loginForm = formBuilder.group({
      email: ['', Validators.email],
      password: ['', Validators.minLength(6)]
    });
  }
  ngOnInit(): void {
  }

  onLogin(): void {
    this.router.navigate(["/", "home"])
    console.log(this.loginForm.value);

    this.authService.login(this.loginForm.value).subscribe((response: any) => {
        console.log(response);

        if (response.status.valid) {
          let user = response;
          this.userService.setUser(user);

          this.router.navigate(["/" ,"my-account"])
        } else {
          alert(response.error);
        }

      }, (error) => {
        console.log(error);
        alert(error.error);
      }
    );
  }
}


