import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators, NgForm  } from '@angular/forms';
import { Router } from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public loginForm: FormGroup;
  public formSubmitted: boolean;

  constructor(private fb: FormBuilder, private router: Router) { 
    if(localStorage.getItem("isUserLogged") == 'yes'){
      this.router.navigate(['/home']);
    }
  }

  ngOnInit() {
    this.createLoginForm();
  }

  createLoginForm() {
    this.loginForm = this.fb.group({
      username: ['', [Validators.required]],
      password: ['', [Validators.required]]
    });
  }

  onClickSubmit(loginForm) {
    this.formSubmitted = true;
    if (loginForm.invalid) {
      return;
    } 
    else {
      if(loginForm.value.username == 'DataFloatUsername' && loginForm.value.password == 'DataFloatPassword'){
        localStorage.setItem("isUserLogged",'yes');
        this.router.navigate(['/home']);
      }
    }
  }

}
