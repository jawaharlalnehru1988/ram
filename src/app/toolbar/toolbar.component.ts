import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { InfoCollectComponent } from '../info-collect/info-collect.component';
import { LoginComponent } from '../info-collect/login/login.component';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent implements OnInit {
  articles: any;
  books: any;
  array: any;
  cantos: any;
  allRouterPath: any;

  constructor(private dialog: MatDialog,  private httpClient: HttpClient, private api: ApiService) { }

  ngOnInit(): void {
  this.getUserInformation();
  this.getMenu(); 
  }
  getMenu(){
    this.api.getMenus().subscribe({
      next:(res)=>{
        this.allRouterPath = res
      }, error:(error)=>{
        alert('some error occured from server')
      }
    })
  }
 getUserInformation(){
  this.api.getUserInfo().subscribe({
    next: (res)=>{
      console.log(res);
    }, error: (err)=>{
      alert('users does not exist');
      
    }
  })
 }
  openDialog(){
    
    const dialogRef = this.dialog.open(InfoCollectComponent,{
      width: '450px',
      disableClose: true
    })
}
openLoginForm(){
  const dialogRef = this.dialog.open(LoginComponent, {
    width: '450px',
    disableClose: true
  })
}
}
