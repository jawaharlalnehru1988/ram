import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { KirtanDialogComponent } from '../kirtan-dialog/kirtan-dialog.component';

@Component({
  selector: 'app-audio-kirtan',
  templateUrl: './audio-kirtan.component.html',
  styleUrls: ['./audio-kirtan.component.css']
})
export class AudioKirtanComponent implements OnInit {

  constructor(private dialog: MatDialog) { }

  ngOnInit(): void {
  }
  // applyFilter(event: Event) {
  //   const filterValue = (event.target as HTMLInputElement).value;
  //   this.dataSource.filter = filterValue.trim().toLowerCase();

  //   if (this.dataSource.paginator) {
  //     this.dataSource.paginator.firstPage();
  //   }
  // }
  openDialog(){
    this.dialog.open(KirtanDialogComponent,{
width: "450px"
    })
  }
}
