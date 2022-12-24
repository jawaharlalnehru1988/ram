import { Component, ElementRef, OnChanges, OnInit, ViewChild } from '@angular/core';
import { interval, Observable, timer } from 'rxjs';
import * as moment from 'moment';


@Component({
  selector: 'app-japa',
  templateUrl: './japa.component.html',
  styleUrls: ['./japa.component.css']
})
export class JapaComponent implements OnInit, OnChanges {
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
  count: number=0;
  constructor() { }

  ngOnInit(): void {
  }
  ngOnChanges(){
// this.beatCounting+=this.count;
console.log(this.count);

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
  openKirtan(event:any){
    console.log(event.source);
    
    let audio = new Audio();
    audio.src = '../assets/mp3/prabhupadaChant.mp3';
    audio.load();
    audio.play();
    this.increaseCount(); 
  //  this.streamObs().subscribe(event =>{});
  }

  // streamObs(){
  //   return new Observable(observer =>{
  //     let audio = new Audio();
  //     audio.src = '../assets/mp3/prabhupadaChant.mp3';
  //     audio.load();
  //     audio.play();
  //     this.increaseCount(); 
  //   })
  // }
  openfile(){
// console.log(toggle._checked);
// if(toggle._checked == true){

  this.streamObserver().subscribe(event =>{
    
  });
// } else  {
//   // this.pause();
// } 
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
    this.seek = this.audioObj2.currentTime
    this.duration = this.formatTime(this.audioObj2.duration);
    this.currentTime = this.formatTime(this.audioObj2.currentTime);
    console.log(this.currentTime);
    
    switch (this.currentTime) {
      case "00:00:19":
        this.count = 1
        break;
        case "00:00:25":
        this.count = 2;
        break;
        case "00:00:31":
        this.count = 3;
        break;
        case "00:00:36":
        this.count = 4;
        break;
        case "00:00:42":
        this.count = 5;
        break;
        case "00:00:48":
        this.count = 6;
        break;
        case "00:00:53":
        this.count = 7;
        break;
        case "00:00:58":
        this.count = 8;
        break;
        case "00:01:04":
        this.count = 9;
        break;
        case "00:01:10":
        this.count = 10;
        break;
        case "00:01:16":
        this.count = 11;
        break;
        case "00:01:21":
        this.count = 12;
        break;
        case "00:01:27":
        this.count = 13;
        break;
        case "00:01:32":
        this.count = 14;
        break;
        case "00:01:38":
        this.count = 15;
        break;
        case "00:01:44":
        this.count = 16;
        break;
        case "00:01:50":
        this.count = 17;
        break;
        case "00:01:56":
        this.count = 18;
        break;
        case "00:02:02":
        this.count = 19;
        break;
        case "00:02:08":
        this.count = 20;
        break;
        case "00:02:14":
        this.count = 21;
        break;
        case "00:02:20":
        this.count = 22;
        break;
        case "00:02:26":
        this.count = 23;
        break;
        case "00:02:32":
        this.count = 23;
        break;
        case "00:02:38":
        this.count = 24;
        break;
        case "00:02:44":
        this.count = 24;
        break;
        case "00:02:50":
        this.count = 25;
        break;
        case "00:02:56":
        this.count = 26;
        break;
        case "00:03:02":
        this.count = 27;
        break;
        case "00:03:08":
        this.count = 28;
        break;
        case "00:03:14":
        this.count = 29;
        break;
        case "00:03:20":
        this.count = 30;
        break;
        case "00:03:26":
        this.count = 31;
        break;
        case "00:03:32":
        this.count = 32;
        break;
        case "00:03:38":
        this.count = 33;
        break;
        case "00:03:44":
        this.count = 34;
        break;
        case "00:03:50":
        this.count = 35;
        break;
        case "00:03:56":
        this.count = 36;
        break;
        case "00:04:02":
        this.count = 37;
        break;
        case "00:04:08":
        this.count = 38;
        break;
        case "00:04:14":
        this.count = 39;
        break;
        case "00:04:20":
        this.count = 40;
        break;
        case "00:04:26":
        this.count = 41;
        break;
        case "00:04:32":
        this.count = 42;
        break;
        case "00:04:38":
        this.count = 43;
        break;
        case "00:04:44":
        this.count = 44;
        break;
        case "00:04:50":
        this.count = 45;
        break;
        case "00:04:56":
        this.count = 46;
        break;
        case "00:05:02":
        this.count = 47;
        break;
        case "00:05:08":
        this.count = 48;
        break;
        case "00:05:14":
        this.count = 49;
        break;
        case "00:05:20":
        this.count = 50;
        break;
        case "00:05:26":
        this.count = 51;
        break;
        case "00:05:32":
        this.count = 52;
        break;
        case "00:05:38":
        this.count = 53;
        break;
        case "00:05:44":
        this.count = 54;
        break;
        case "00:05:50":
        this.count = 55;
        break;
        case "00:05:56":
        this.count = 56;
        break;
        case "00:06:02":
        this.count = 57;
        break;
        case "00:06:08":
        this.count = 58;
        break;
        case "00:06:14":
        this.count = 59;
        break;
        case "00:06:20":
        this.count = 60;
        break;
        case "00:06:26":
        this.count = 61;
        break;
        case "00:06:32":
        this.count = 62;
        break;
        case "00:06:38":
        this.count = 63;
        break;
        case "00:06:44":
        this.count = 64;
        break;
        case "00:06:50":
        this.count = 65;
        break;
        case "00:06:56":
        this.count = 66;
        break;
        case "00:07:02":
        this.count = 67;
        break;
        case "00:07:08":
        this.count = 68;
        break;
        case "00:07:14":
        this.count = 69;
        break;
        case "00:07:20":
        this.count = 70;
        break;
        case "00:07:26":
        this.count = 71;
        break;
        case "00:07:32":
        this.count = 72;
        break;
        case "00:07:38":
        this.count = 73;
        break;
        case "00:07:44":
        this.count = 74;
        break;
        case "00:07:50":
        this.count = 75;
        break;
        case "00:07:56":
        this.count = 76;
        break;
        case "00:08:02":
        this.count = 77;
        break;
        case "00:08:08":
        this.count = 78;
        break;
        case "00:08:14":
        this.count = 79;
        break;
        case "00:08:20":
        this.count = 80;
        break;
        case "00:08:26":
        this.count = 81;
        break;
        case "00:08:32":
        this.count = 82;
        break;
        case "00:08:38":
        this.count = 83;
        break;
        case "00:08:44":
        this.count = 84;
        break;
        case "00:08:50":
        this.count = 85;
        break;
        case "00:08:56":
        this.count = 86;
        break;
        case "00:09:02":
        this.count = 87;
        break;
        case "00:09:08":
        this.count = 88;
        break;
        case "00:09:14":
        this.count = 89;
        break;
        case "00:09:20":
        this.count = 90;
        break;
        case "00:09:26":
        this.count = 91;
        break;
        case "00:09:32":
        this.count = 92;
        break;
        case "00:09:38":
        this.count = 93;
        break;
        case "00:09:44":
        this.count = 94;
        break;
        case "00:09:50":
        this.count = 95;
        break;
        case "00:09:56":
        this.count = 96;
        break;
        case "00:10:02":
        this.count = 97;
        break;
        case "00:10:08":
        this.count = 98;
        break;
        case "00:10:14":
        this.count = 99;
        break;
        case "00:10:20":
        this.count = 100;
        break;
        case "00:10:26":
        this.count = 101;
        break;
        case "00:10:32":
        this.count = 101;
        break;
        case "00:10:38":
        this.count = 103;
        break;
        case "00:10:44":
        this.count = 104;
        break;
        case "00:10:52":
        this.count = 105;
        break;
        case "00:10:58":
        this.count = 106;
        break;
        case "00:11:":
        this.count = 107;
        break;
        case "00:01:27":
        this.count = 108;
        break;
        
      default:
        break;
    }
    // console.log(this.count);
    let start = 0
    start + this.count;
    console.log( this.count);
    
    
    // const obs$ = interval(1000)
    // obs$.subscribe(res => {
    //     console.log(res);
    //   })
  // const ons$ = timer(5000, 1000);
  // ons$.subscribe(res=>{
  //   console.log(res);
    
  // })
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
