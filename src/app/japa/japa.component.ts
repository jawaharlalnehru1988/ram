import { Component,  OnInit } from '@angular/core';
import { MatLegacyDialog as MatDialog, MatLegacyDialogRef as MatDialogRef } from '@angular/material/legacy-dialog';
import { KirtanDialogComponent } from '../kirtan-lesson/kirtan-dialog/kirtan-dialog.component';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import {MatProgressBarModule} from '@angular/material/progress-bar';


@Component({
  standalone: true,
  imports: [CommonModule, MatIconModule, MatProgressBarModule, MatSlideToggleModule],
  selector: 'app-japa',
  templateUrl: './japa.component.html',
  styleUrls: ['./japa.component.css']
})
export class JapaComponent {
  audioObj = new Audio();
  url = "../assets/mp3/pr108.mp3"
  malaCounting = 0;
  beatCounting = 0;
  sixteenMalaCount = 0;
  isAudioPaused = false;
  count: number=0;
  comparisonCount: any;
  timeElements: any;
  timings: any;
  prabhuVoiceEnabled: any;
  isPlaying = false;
  audio!: HTMLAudioElement;
  isTickChecked: any;
  isPlayingsri: boolean = false;
  fullMala = 108;
  loopAudio:any;
  dialogRef!: MatDialogRef<KirtanDialogComponent>;
  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {

  }
playTickSound(){
  let tick = new Audio();
  tick.src = '../assets/mp3/tick.mp3';
  tick.load();
  tick.play();
}

  increaseCount(){
    if(this.isTickChecked === true){
      this.playTickSound();
    }
    this.beatCounting += 1;
    if(this.beatCounting === this.fullMala){
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
  jayaSriKrishna(){
    this.isPlayingsri = true;
    let jaya = new Audio();
    jaya.src = '../assets/mp3/jayaSri.mp3';
    jaya.load();
    jaya.play();
    let chaitanyaManthra = 'ஸ்ரீ கிருஷ்ண சைதன்ய ப்ரபு நித்யானந்த ஸ்ரீ அத்வைத கதாதர ஸ்ரீ வாஸாதி கௌர பக்த விருந்த '
    this.openDialog(chaitanyaManthra)
    jaya.addEventListener('ended', () =>{
      this.isPlayingsri = false;
      this.dialogRef.close();
      this.playAudio(0);
    })
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
  loop108Count(event:any){
    this.isAudioPaused = !this.isAudioPaused;
    this.prabhuVoiceEnabled = false;
console.log("event", event);

if(this.beatCounting === 0){
  this.jayaSriKrishna();
} else {
  this.loopAudio = new Audio();
  this.loopAudio.src = '../assets/mp3/prabhupadaChant.mp3';
  this.loopAudio.load();
  if (this.isAudioPaused) {
  this.loopAudio.play();
  this.isPlaying = true;
  this.isPlayingsri = true;
} else {
  let message = "இந்த மந்திரம் முடிந்த பிறகு  நிறுத்தப்படும். ஏனென்றால் மந்திரத்தை இடையில் நிறுத்தக்கூடாது"
  this.openDialog(message);
  this.loopAudio.pause();
  }
  this.loopAudio.addEventListener('ended', ()=>{
    this.playAudio(1);
  })
}
  }
  openDialog(optional:any): void {
    this.dialogRef = this.dialog.open(KirtanDialogComponent, {
      width: '250px',
      data: {
        message: optional,
        id: "japa"
      }
    })
  }
  playAudio(count: number) {
    this.increaseCount();
    if (count > 1728) {
      this.isPlaying = false;
      return;
    }
    this.audio = new Audio();
    this.audio.src = '../assets/mp3/prabhupadaChant.mp3';
    this.audio.load();
    this.isPlaying = true;
    if (this.isAudioPaused) {
      this.audio.play();
    } else {
      this.audio.pause();
      this.dialogRef.close();
      this.isPlayingsri = false;
      this.isPlaying = false;
    }
    this.audio.addEventListener('ended', () => {
      this.playAudio(count + 1);
    });
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

