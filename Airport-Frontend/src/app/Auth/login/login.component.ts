import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthenticationService } from 'src/app/Services/authentication.service';
import { AuthService } from 'src/app/Services/auth.service';
import { Router } from '@angular/router';
import { ErrorComponent } from 'src/app/error/error.component';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import * as UserActions from '../../State/Actions/user.action';
import { UserState } from '../../State/Reducers/user.reducer';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, ErrorComponent],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  form!: FormGroup
  loading$: Observable<boolean>;
  error$: Observable<any>;
  constructor(private fb: FormBuilder, private authentication: AuthenticationService, private auth: AuthService,
    private router: Router
  ) {

  }
  ngOnInit(): void {
    this.form = this.fb.group({
      Email: [null, [Validators.required, Validators.email]],
      Password: [null, Validators.required]
    })

    this.loading$ = this.store.select(state => state.user.loading);
    this.error$ = this.store.select(state => state.user.error);
  }



  submitForm(): void {
    const { email, password } = this.form.value;
    this.store.dispatch(UserActions.Login({ email, password }));
  }

}

