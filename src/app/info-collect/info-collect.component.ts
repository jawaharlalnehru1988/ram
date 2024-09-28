import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { MatDialog, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';

@Component({
  standalone: true,
  imports: [MatDialogModule, MatIconModule, MatFormFieldModule, ReactiveFormsModule],
  selector: 'app-info-collect',
  templateUrl: './info-collect.component.html',
  styleUrls: ['./info-collect.component.css']
})
export class InfoCollectComponent implements OnInit {
  basicInfoForm!: FormGroup;
  password1: any;
  login: string = "login"
  password2: any;
  hide: boolean = true;

  constructor(private formBuilder: FormBuilder, private dialog: MatDialog,
     private httpClient: HttpClient, private router: Router, private dialogRef: MatDialogRef<InfoCollectComponent>) { }

  ngOnInit(): void {
    this.basicInfoForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      emailId: ['', Validators.required],
      mobile: ['', ],
      about: ['', ],
      newPwd: ['', Validators.required],
      confirmPwd: ['', Validators.required]
    })
  }
  
  saveForm(){
    console.log(this.basicInfoForm.value);
    this.httpClient.post('http://localhost:3000/profile', this.basicInfoForm.value).subscribe(res =>{
      console.log(res);
      alert('Your profile saved successfully')
      this.basicInfoForm.reset();
      // this.router.navigate(['/navigation']);
      this.dialogRef.close();
      this.openSignIn();
    }),
    (error: any) =>{
      console.log(error);
      alert('something went wrong')
    }
  }
  openSignIn(){
    this.dialog.open(LoginComponent,{
      width: "450px",
      disableClose: true
    })
  }
}
