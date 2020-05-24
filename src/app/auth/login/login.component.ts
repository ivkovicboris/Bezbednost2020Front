import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public loginForm: FormGroup;
  // errorMessage: string = '';

  constructor(private fb: FormBuilder, private router: Router, private authService: AuthService) {
    this.loginForm = this.createForm();
  }

  ngOnInit() {
  }

  private createForm(): FormGroup {
    return this.fb.group({
      'email': ['', Validators.compose([Validators.required, Validators.minLength(3)])],
      'password': ['', Validators.compose([Validators.required, Validators.minLength(3)])],
    })
  }


  public onLogin() {
    this.authService.login(this.loginForm.value).subscribe(data => {
      console.log(data);
      localStorage.setItem('token', data);
      this.router.navigateByUrl('pages/admin-home');
    }
      // , error => {
      //   console.log(error.error.text);
      //   const token = error.error.text;
      //   localStorage.setItem('token', token);
      //   this.router.navigateByUrl('pages/admin-home');
      // }
    )
  }


}
