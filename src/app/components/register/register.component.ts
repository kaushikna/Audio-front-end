import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registrationForm!: FormGroup;

  constructor(private fb: FormBuilder, private authService: UserService,private router: Router) {
    this.registrationForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    
    });
  }

  submitForm() {
    if (this.registrationForm.valid) {
      const { email, password } = this.registrationForm.value;
      this.authService.register(email, password)
        .subscribe(
          (response: any) => {
            console.log('Registration successful:', response);

            this.router.navigate(['/login']);
          },
          (error: any) => {
            console.error('Registration failed:', error);
            // Handle registration error here
          }
        );
    }
  }

  // Helper function to get form control for error handling in HTML
  get email() {
    return this.registrationForm.get('email');
  }

  get password() {
    return this.registrationForm.get('password');
  }



  ngOnInit(): void {
  }

}
