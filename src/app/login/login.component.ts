import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../authentication.service';
import { MatSnackBar } from '@angular/material/snack-bar';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(
    private authenticationService: AuthenticationService,
    private snackBar: MatSnackBar) { }

  ngOnInit(): void {
    if(this.authenticationService.isLoggedIn()){
      this.authenticationService.logout();
      this.snackBar.open('You have been logged out.', 'Dismiss', {
        duration: 3000
      });
    }
  }

  onLogin() {
    this.authenticationService.login();
  }
}
