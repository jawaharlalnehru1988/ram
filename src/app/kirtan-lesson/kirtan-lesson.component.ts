import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-kirtan-lesson',
  templateUrl: './kirtan-lesson.component.html',
  styleUrls: ['./kirtan-lesson.component.css']
})
export class KirtanLessonComponent implements OnInit {
  clor = 'green'
ids=["AuT3rfQP8DA", "DsNwFkcgPIA", "TGPrC1phnFQ", "QnQaxdxWPso", "MuKCtgzmImc", "rhRpr1mNLMI"];
lessons:any;
playerVars ={
  cc_lang_pref:"en"
}
player:any;
  constructor(private httpClient:HttpClient) { }

  ngOnInit(): void {
    this.httpClient.get('https://sheetdb.io/api/v1/ufofhn680ebn3?sheet=karatal').subscribe(res=>{
  this.lessons = res;
    
  })
  }
savePlayer(player:any){
this.player = player;
}
playVideo(){
this.player.playVideo();
}
pauseVideo(){
this.player.pauseVideo();
}
}
