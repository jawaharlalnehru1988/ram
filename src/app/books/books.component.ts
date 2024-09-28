import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ViewportScroller } from "@angular/common";
@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css'],
  standalone: true,
  imports: []
})
export class BooksComponent implements OnInit {
  books: any;
imgsrc = 'assets/images/prabhupadaBooks/bs-back.jpg'
  constructor(private httpClient: HttpClient, private scroller: ViewportScroller,) { }

  ngOnInit(): void {
    this.httpClient.get('https://jagannathadasa16.github.io/bookApi/prbook.json').subscribe(res=>{
  this.books = res;
  console.log("this.books", this.books);
  
  });
  }
  scroll(){
    this.scroller.scrollToAnchor("down");
  }
}
