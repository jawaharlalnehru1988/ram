import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Observable } from 'rxjs';
import * as moment from 'moment';


@Component({
  selector: 'app-japa',
  templateUrl: './japa.component.html',
  styleUrls: ['./japa.component.css']
})
export class JapaComponent implements OnInit {
  audioObj = new Audio();
  audioObj2 = new Audio();
  url = "../assets/mp3/pr108.mp3"
  @ViewChild('#tempRef') tempRef!: ElementRef ;
  audioEvents = [
    "ended",
    "error",
    "play",
    "playing",
    "pause",
    "timeupdate",
    "canplay",
    "loadedmetadata",
    "loadstart"
  ];
  malaCounting = 0;
  beatCounting = 0;
  sixteenMalaCount = 0;
  constructor() { }

  ngOnInit(): void {
  }
  increaseCount(){
    this.beatCounting += 1;
    if(this.beatCounting === 108){
    this.oneHundredEight();
    }
  }
  resetIncreaseCount(){
    this.beatCounting = 0;
  }
  oneHundredEight(){
    this.malaCounting += 1;
    this.beatCounting = 0;
    if(this.malaCounting === 16){
      this.every16count();
    }
  }
  reset16Count(){
    this.malaCounting = 0;
  }
  every16count(){
    this.malaCounting = 0;
    this.sixteenMalaCount += 1;
  }
  reset64Count(){
    this.sixteenMalaCount = 0;
  }
  openKirtan(){
let audio = new Audio();
audio.src = '../assets/mp3/prabhupadaChant.mp3';
audio.load();
audio.play();
this.increaseCount();
  }

  openfile(toggle:any){
console.log(toggle._checked);
if(toggle._checked == true){
  this.streamObserver().subscribe(event =>{
    
  });
} else  {
  this.pause();
} 
  }
  play(){
this.audioObj2.play()
console.log("audio is playing");

  }
  pause(){
console.log("audio is paused");
this.audioObj2.pause();

  }
  stop(){
console.log("audio is stopped");
this.audioObj2.pause();
this.audioObj2.currentTime = 0;

  }
  setVolume(event:any){
    console.log(event.target.value);
    this.audioObj2.volume = event.target.value;
    
  }
  currentTime = "00:00:00";
  duration = "00:00:00";
  seek = 0;
  streamObserver(){
return new Observable(observer =>{
  this.audioObj2.src = this.url;
  this.audioObj2.load();
  this.audioObj2.play();

  const handler = (event:Event) =>{
    console.log(event.timeStamp);
 
    // if(this.formatTime(event.timeStamp) > "08:00:00" && this.formatTime(event.timeStamp) < "08:58:00"){
    //    this.increaseCount();
    // }
    // if (this.formatTime(event.timeStamp) > "12:55:00" && this.formatTime(event.timeStamp) < "12:58:00"){
    //   this.increaseCount();
    // }
    this.seek = this.audioObj2.currentTime
    this.duration = this.formatTime(this.audioObj2.duration);
    this.currentTime = this.formatTime(this.audioObj2.currentTime);
  }
  this.addEvent(this.audioObj2, this.audioEvents, handler);
  return () => {
    this.audioObj2.pause();
    this.audioObj2.currentTime = 0;
  }
});
  }

  addEvent(obj:any, events:any, handler:any){
events.forEach((event:any) => {
  obj.addEventListener(event, handler);
});
  }
  removeEvent(add:any, events:any, handler:any){

  }
  formatTime(time: number, format: string = "HH:mm:ss") {
    const momentTime = time * 1000;
    return moment.utc(momentTime).format(format);
  }
  playEvent(event:any){
    console.log("event", event);
    
  }
}
