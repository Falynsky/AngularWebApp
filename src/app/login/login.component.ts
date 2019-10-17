import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username = 'login';
  password = 'password';
  errorMessage = 'Invalid credentials';
  private invalidLogin: boolean;

  constructor(private router: Router) {
  }


  ngOnInit() {
  }

  login() {
    console.log(this.username);
    if (this.username === 'falu' && this.password === 'falu') {
      this.router.navigate(['main', this.username]);
      this.invalidLogin = false;
    } else {
      this.invalidLogin = true;
    }
  }
}
