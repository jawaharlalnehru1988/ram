import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {
  books: any;
imgsrc = 'assets/images/prabhupadaBooks/bs-back.jpg'
  constructor(private httpClient: HttpClient) { }

  ngOnInit(): void {
    this.httpClient.get('https://sheetdb.io/api/v1/ufofhn680ebn3?sheet=prbook').subscribe(res=>{
  this.books = res;
  console.log("this.books", this.books);
  
  });
  }
}
