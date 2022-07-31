import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss'],
})
export class SignInComponent implements OnInit {
  signInForm = this.fb.group({
    email: [
      '',
      { validators: [Validators.required, Validators.email], updateOn: 'blur' },
    ],
    password: ['', { validators: [Validators.required] }],
  });

  constructor(private fb: FormBuilder, private _userService: UserService) {}

  ngOnInit(): void {}

  get email() {
    return this.signInForm.controls['email'];
  }

  getErrorMessage() {
    if (this.email.hasError('required')) {
      return 'Email must be filled out';
    }
    return this.email.hasError('email') ? 'Not a valid email' : '';
  }

  get password() {
    return this.signInForm.controls['password'];
  }

  onSubmit() {
    const email: string = this.email.value as string;
    const password: string = this.password.value as string;

    this._userService.login({
      email: email,
      password: password,
    });
  }
}
