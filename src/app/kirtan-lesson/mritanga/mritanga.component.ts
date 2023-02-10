import { Component, OnInit } from '@angular/core';
import { KirtanDialogComponent } from '../kirtan-dialog/kirtan-dialog.component';
import {MatDialog} from '@angular/material/dialog';
import { ApiService } from 'src/app/services/api.service';
import {AfterViewInit, ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';

@Component({
  selector: 'app-mritanga',
  templateUrl: './mritanga.component.html',
  styleUrls: ['./mritanga.component.css']
})
export class MritangaComponent implements OnInit {
  displayedColumns: string[] = ['id', 'title', 'author', 'youtubeId', 'detail', 'action'];
  dataSource!: MatTableDataSource<any>;
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  playerVars ={
    cc_lang_pref:"en"
  }
  player: any;
  constructor(public dialog: MatDialog, private api: ApiService) { }

  ngOnInit(): void {
    this.getAllLessons();
  }
  openDialog() {
   this.dialog.open(KirtanDialogComponent, {
    width: '450px'
   }).afterClosed().subscribe(val =>{
    if (val === "save") {
      this.getAllLessons();
    }
    
   })
  }
  getAllLessons(){
    this.api.getLesson().subscribe({
      next:(response)=>{
        this.dataSource = new MatTableDataSource(response);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      },
      error:()=>{
        console.log('some error occures');
        
      }
    })
  }
  editLesson(row:any){
    this.dialog.open(KirtanDialogComponent,{
      width: '30%',
      data: row
    }).afterClosed().subscribe(val=>{
      if (val === "update") {
        this.getAllLessons();
      }
    })
  }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
  savePlayer(player:any){
    this.player = player;
    }
    delete(row:any){
this.api.deleteLesson(row.id).subscribe({
  next:(res)=>{
    alert("this row data is deleted success fully");
    this.getAllLessons();
  }
})
    }
}
