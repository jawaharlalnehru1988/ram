import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { InfoCollectComponent } from '../info-collect/info-collect.component';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {
  text: string = '';
  array: any[] = [];
  cantos: any[] = [];
  articles: any;
  books: any;

  constructor(private dialog: MatDialog, private httpClient: HttpClient) { }

  ngOnInit(): void {
    for(let i = 1; i <= 18; i++){
      this.array.push("Chapter "+ i)
  }
  for (let j = 1; j<=12; j++){
    this.cantos.push("Cantos "+j)
  }
  this.httpClient.get('https://jagannathadasa16.github.io/bookApi/bookdb.json').subscribe(res=>{
  this.articles = res;
  
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
