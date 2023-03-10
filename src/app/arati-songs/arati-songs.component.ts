import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { KirtanDialogComponent } from '../kirtan-lesson/kirtan-dialog/kirtan-dialog.component';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-arati-songs',
  templateUrl: './arati-songs.component.html',
  styleUrls: ['./arati-songs.component.css']
})
export class AratiSongsComponent implements OnInit {
  lessons: any;
  playerVars ={
    cc_lang_pref:"en"
  }
  player: any;
  showFullText: boolean = false;
  constructor(private httpClient:HttpClient, public dialog: MatDialog, private api: ApiService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.httpClient.get('https://jagannathadasa16.github.io/bookApi/aratisongs.json').subscribe(res=>{
  this.lessons = res;
    })
    console.log(
      this.route.snapshot.routeConfig?.path

    );
  }
  ngAfterViewInit(){
    this.recieveMessage();
  }
  recieveMessage(){
    this.api.festivalArati$.subscribe(res =>{
      console.log(res);
      
    })
  }
  savePlayer(player:any){
    this.player = player;
    }

    formatText(text: any) {
      return text.replace(/\n/g, '<br>');
    }
    
    toggleFullText() {
      this.showFullText = !this.showFullText;
    }
    openDialog(lesson:any) {
lesson['routerName']=this.route.snapshot.routeConfig?.path;
console.log(lesson);

      this.dialog.open(KirtanDialogComponent, {
       width: '450px',
       data: lesson
      }).afterClosed().subscribe(val =>{
       if (val === "save") {
        //  this.getAratiSongs();
       }
       
      })
     }
}
