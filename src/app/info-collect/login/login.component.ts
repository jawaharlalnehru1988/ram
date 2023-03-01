import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';
import { InfoCollectComponent } from '../info-collect.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;
  hide: boolean = true;
  password1: any;
  constructor(public formBuilder: FormBuilder, private dialog: MatDialog, private dialogRef: MatDialogRef<LoginComponent>, private api: ApiService, private router: Router) { }

  ngOnInit(): void {
    this.loginFormField();
  }
  loginFormField(){
    this.loginForm = this.formBuilder.group({
      loginemailId: ['', Validators.required],
      loginPwd: ['', Validators.required]
    })
  }
  saveForm(){
    console.log("loginform", this.loginForm.value);
this.api.getUserInfo().subscribe({
  next:(res)=>{
    console.log(res);
    const user = res.find((a:any)=>{
      return a.emailId === this.loginForm.value.loginemailId && a.newPwd === this.loginForm.value.loginPwd;
    });
    if (user) {
      alert('You have Logged in successfully');
      console.log(user);
      
      sessionStorage.setItem("username", user.firstName);
      sessionStorage.setItem("userrole", user.role);
      this.loginForm.reset();
      this.dialogRef.close();
      this.router.navigate(['']);
    } else {
      alert('user not found');
    }
  }, error: (err)=>{
    alert('something went wrong');
  }
})
    
  }
  openSignUp(){
    this.dialog.open(InfoCollectComponent, {
      width: "450px",
      disableClose : true
    })
  }
}
