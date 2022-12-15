import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-kirtan-lesson',
  templateUrl: './kirtan-lesson.component.html',
  styleUrls: ['./kirtan-lesson.component.css']
})
export class KirtanLessonComponent implements OnInit {
id="AuT3rfQP8DA";
playerVars ={
  cc_lang_pref:"en"
}
player:any;
  constructor() { }

  ngOnInit(): void {
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
