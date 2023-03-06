import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthenticationService } from 'src/app/Services/authentication.service';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import * as UserActions from '../../State/Actions/user.action';
import { UserState } from '../../State/Reducers/user.reducer';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [CommonModule,ReactiveFormsModule],
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit{
  form!:FormGroup
  loading$!: Observable<boolean>;
  error$!: Observable<any>;
  constructor(private fb:FormBuilder,private authentication:AuthenticationService, private router:Router){

  }
  ngOnInit(): void {
    this.form = this.fb.group({
      Name:[null, Validators.required],
      Email:[null, [Validators.required, Validators.email]],
      Password:[null, Validators.required]
    })

    this.loading$ = this.store.select(state => state.user.loading);
    this.error$ = this.store.select(state => state.user.error);
  }
  submitForm(){
    const name = this.form.get('name').value;
    const email = this.form.get('email').value;
    const password = this.form.get('password').value;
    this.store.dispatch(new Register({ name, email, password }));
  }
}
