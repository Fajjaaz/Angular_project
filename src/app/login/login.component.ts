import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  username: string = '';
  password: string = '';

  constructor(private readonly router: Router, private readonly snackBar: MatSnackBar){

  }

  onSubmit(): void {
    if (this.username === 'admin' && this.password === 'password') {
      // Correct username and password, proceed with login
      console.log('Login successful');
      sessionStorage.setItem('username', this.username);
      sessionStorage.setItem('password', this.password);
      sessionStorage.setItem('loginTime', Date.now().toString());

      this.router.navigate(['admin']);
    } else {
      // Incorrect username or password, show an error message or handle accordingly
      console.log('Incorrect username or password');
      this.snackBar.open('Username or password is incorrect', 'Close', {
          duration: 5000,
          horizontalPosition: 'center',
          panelClass:['snackbar-center']
        });
    }
  }
}
