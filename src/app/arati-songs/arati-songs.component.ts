import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-arati-songs',
  templateUrl: './arati-songs.component.html',
  styleUrls: ['./arati-songs.component.css']
})
export class AratiSongsComponent implements OnInit {
  lessons: any;

  constructor(private httpClient:HttpClient) { }

  ngOnInit(): void {
    this.httpClient.get('https://sheetdb.io/api/v1/ufofhn680ebn3?sheet=aratiSongs').subscribe(res=>{
  this.lessons = res;
    })
  }

}
