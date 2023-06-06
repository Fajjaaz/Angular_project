import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-adminpage',
  templateUrl: './adminpage.component.html',
  styleUrls: ['./adminpage.component.css']
})
export class AdminpageComponent {
  name!: string;
  address!: string;
  telephone!: string;

  constructor(private router: Router, private http: HttpClient) {}

  submitForm(): void {
    const isAddressValid = this.verifyAddress(this.address);
    
    if (isAddressValid) {
      console.log('Form submitted successfully!');
      const user = {
        name: this.name,
        address: this.address,
        telephone: this.telephone
      };

      this.http.post('/userdatabasePOST?user=admin', user).subscribe(
      (response) => {
        console.log('User updated successfully!', response);
        this.name = '';
        this.address = '';
        this.telephone = '';
      },
      (error) => {
        console.log('Error updating user:', error);
      }
    );
    } else {
      console.log('Invalid address. Please check again.');
    }
  }

  private verifyAddress(address: string): boolean {
    
    // Example: Check if the address contains a valid street name and a number
    const addressRegex = /^[A-Za-z\s]+\s\d+$/;
    return addressRegex.test(address);
  }

  formValid(): boolean {
    // Check if all form fields are valid
    return !!this.name && !!this.address && !!this.telephone;
  }

  getUsername(): string {
    return sessionStorage.getItem('username') || '';
  }

  getLoginTime(): string {
    const loginTime = sessionStorage.getItem('loginTime');
    if (loginTime) {
      return new Date(Number(loginTime)).toLocaleString();
    }
    return '';
  }

  logout(): void {
    sessionStorage.clear();
    this.router.navigate(['/login']);
  }
}
