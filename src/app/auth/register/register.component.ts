import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {AuthService} from "../auth.service";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registerForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private authService: AuthService) {
    this.registerForm = formBuilder.group({
      username: ['', Validators.minLength(3)],
      firstName: ['', Validators.minLength(3)],
      lastName: ['', Validators.minLength(3)],
      email: ['', Validators.email],
      password: ['', Validators.minLength(6)],
      retypePassword: ['', Validators.minLength(6)],
    });
  }
  ngOnInit(): void {}

  onRegister(): void {
    console.log(this.registerForm.value);
    this.authService.register(this.registerForm.value).subscribe((response: any) => {
      console.log(response);

      if(response.status == 200) {
        alert(response.message);

      } else {
        alert(response.error);
      }

    })

  }

}
