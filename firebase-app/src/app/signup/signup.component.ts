import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth/auth.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  errorFlag = false;
  signupForm = new FormGroup({
    'email': new FormControl(null, Validators.required),
    'password': new FormControl(null, Validators.required)
  }); 
  
  constructor(private auth: AuthService,
              private router: Router,
              private toastr: ToastrService) { }

  ngOnInit() {
  }

  signup(){
    if(this.signupForm.valid){
      this.auth.signup(this.signupForm.value.email, this.signupForm.value.password)
      .then(
        value => {
          console.log('Success!', value);
          this.router.navigate(['login']);
        },
        err => {
          this.toastr.error('Something Went wrong', err.message);
        }
      );
    }else {
      this.errorFlag = true;
    }
  }

}
