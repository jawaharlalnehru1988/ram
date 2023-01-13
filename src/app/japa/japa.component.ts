import { Component, ElementRef, OnChanges, OnInit, SimpleChanges, ViewChild } from '@angular/core';
import { interval, Observable, timer } from 'rxjs';
import * as moment from 'moment';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-japa',
  templateUrl: './japa.component.html',
  styleUrls: ['./japa.component.css']
})
export class JapaComponent implements OnInit {
  audioObj = new Audio();
  audioObj2 = new Audio();
  timeObj = ['00:00:00']
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
  comparisonCount: any;
  timeElements: any;
  timings: any;
  constructor(private httpClient:HttpClient) { }

  ngOnInit(): void {
 this.fetchTimings();
  
  }
  fetchTimings(){
    this.httpClient.get('https://sheetdb.io/api/v1/ufofhn680ebn3?sheet=count').subscribe(res=>{
      this.comparisonCount = res;
    this.timings =  this.comparisonCount.map((item:any) => item.time);
      });
  }
  findDublicates(arr:any){
    return arr.filter((currentValue:any, currentIndex:any)=>
    arr.indexOf(currentValue) != currentIndex)
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
    this.timeObj.push(this.currentTime);
const newArry = [...new Set(this.timeObj)];
// console.log(newArry);

for (let j = 0; j < newArry.length; j++) {
  const element = newArry[j];
  console.log(element);
  

for (let i = 0; i < this.timings.length; i++) {
  const element = this.timings[i];
  this.timeElements = element.replace(/0:/, "00:");
  if (newArry[j] == this.timeElements) {
    console.log('i am matched');
    this.increaseCount();
  }
} 
}
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

