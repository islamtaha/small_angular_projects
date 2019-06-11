import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth/auth.service';
import { Router } from '@angular/router';
import { TokenService } from '../auth/token.service';
import * as firebase from  'firebase/app';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  errorFlag = false;
  loginForm = new FormGroup({
    'email': new FormControl(null, Validators.required),
    'password': new FormControl(null, Validators.required)
  }); 
  
  constructor(private auth: AuthService,
              private router: Router,
              private tokenService: TokenService,
              private toastr: ToastrService) { }

  ngOnInit() {
    this.tokenService.removeToken();
  }

  login(){
    if(this.loginForm.valid){
      this.auth.login(this.loginForm.value.email, this.loginForm.value.password)
      .then(
        response => {
          this.auth.getToken();
          this.router.navigate(['home']);
        }
      )
      .catch(
        err => {
          this.toastr.error('Something Went wrong', err.message);
        }
      );
    }else{
      this.errorFlag = true;
    }
  }
}