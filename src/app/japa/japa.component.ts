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
  url = "../assets/mp3/pr108.mp3"
  @ViewChild('#tempRef') tempRef!: ElementRef ;
  malaCounting = 0;
  beatCounting = 0;
  sixteenMalaCount = 0;
  count: number=0;
  comparisonCount: any;
  timeElements: any;
  timings: any;
  prabhuVoiceEnabled: any;
  isPlaying = false;
  audio!: HTMLAudioElement;
  isTickChecked: any;
  constructor() { }

  ngOnInit(): void {

  }

  increaseCount(){
    if(this.isTickChecked === true){
      let tick = new Audio();
      tick.src = '../assets/mp3/tick.mp3';
      tick.load();
      tick.play();
    } else {
      console.log("டிக் சப்தம் வேண்டுமா ?");
      
    }
    this.beatCounting += 1;
    if(this.beatCounting === 108){
    this.oneHundredEight();
    }
    if(this.prabhuVoiceEnabled === true){
    this.openKirtan();
   
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
    let bell = new Audio();
    bell.src = '../assets/mp3/bell.mp3';
    bell.load();
    bell.play();
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
  srilaPrabhu(isChecked:any){
if (isChecked === true) {
  this.prabhuVoiceEnabled = true;;
} else {
  this.prabhuVoiceEnabled = false;
}
  }
  openKirtan(){
    this.isPlaying = true;
    this.audio = new Audio();
    this.audio.src = '../assets/mp3/prabhupadaChant.mp3';
    this.audio.load();
    this.audio.play();
    this.audio.addEventListener('ended', () => {
      this.isPlaying = false;
    });
  }
  increaseSpeed() {
    if (this.audio) {
      this.audio.playbackRate += 0.1;
    }
  }

  decreaseSpeed() {
    if (this.audio) {
      this.audio.playbackRate -= 0.1;
    }
  }
  tickSound(action:any){
    this.isTickChecked = action;
    
  }
}

