import {Component, OnInit} from '@angular/core';
import {AbstractControl, FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.css']
})
export class RegisterFormComponent implements OnInit {

  countryList = [
    {id: 1, name: 'USA'},
    {id: 2, name: 'Vietnam'},
    {id: 3, name: 'Japan'},
    {id: 4, name: 'China'},
    {id: 5, name: 'Korea'},
  ];

  registerForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.pattern('^[\\w-\\.]+@([\\w-]+\\.)+[\\w-]{2,4}$')]),
    passGroup: new FormGroup({
      password: new FormControl('', [Validators.required, Validators.minLength(6)]),
      confirmPassword: new FormControl('', [Validators.required])
    }, this.comparePassword),
    country: new FormControl('', [Validators.required]),
    age: new FormControl('', [Validators.required, Validators.min(18)]),
    gender: new FormControl('', [Validators.required]),
    phone: new FormControl('', [Validators.required, Validators.pattern('^\\+84[0-9]{9,10}$')])
  });

  constructor() {
  }

  ngOnInit(): void {
  }

  onSubmit() {
    console.log(this.registerForm.value);
  }

  get email() {
    return this.registerForm.get('email');
  }

  get passGroup() {
    return this.registerForm.get('passGroup');
  }

  get country() {
    return this.registerForm.get('country');
  }

  get gender() {
    return this.registerForm.get('gender');
  }

  get age() {
    return this.registerForm.get('age');
  }

  get phone() {
    return this.registerForm.get('phone');
  }

  comparePassword(c: AbstractControl) {
    const v = c.value;
    return (v.password === v.confirmPassword) ? null : {passwordNotMatch: true};
  }
}
