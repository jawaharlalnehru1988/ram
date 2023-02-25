import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { InfoCollectComponent } from '../info-collect/info-collect.component';
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
  //   this.httpClient.get('https://jagannathadasa16.github.io/bookApi/bookdb.json').subscribe(res=>{
  // this.articles = res;
  
  // })
  this.api.getMenus().subscribe({
    next:(res)=>{
      this.allRouterPath = res
      console.log(res.map((route:any) => route.routerLink));
      
    }, error:(error)=>{
      alert('some error occured from server')
    }
  })
  this.httpClient.get('https://jagannathadasa16.github.io/bookApi/book.json').subscribe(res =>{
    this.books = res;
    
  })
 
  }
 
  openDialog(){
    
    const dialogRef = this.dialog.open(InfoCollectComponent,{
      width: '450px',
      disableClose: true
    })
}

}
