import { Component, OnInit } from '@angular/core';
import { KirtanDialogComponent } from '../kirtan-dialog/kirtan-dialog.component';
import { ApiService } from 'src/app/services/api.service';
import {ViewChild} from '@angular/core';
import {MatSort} from '@angular/material/sort';
import { CommonModule } from '@angular/common';
import {MatCardModule} from '@angular/material/card';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatDialog } from '@angular/material/dialog';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';


@Component({
  standalone: true,
  imports: [CommonModule, MatCardModule, MatProgressSpinnerModule],
  selector: 'app-mritanga',
  templateUrl: './mritanga.component.html',
  styleUrls: ['./mritanga.component.css']
})
export class MritangaComponent implements OnInit {
  isVideoLoading :any;
  displayedColumns: string[] = ['id', 'title', 'author', 'youtubeId', 'detail', 'action'];
  dataSource!: MatTableDataSource<any>;
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  playerVars ={
    cc_lang_pref:"en"
  }
  player: any;
  showFullText = false;
  mritangaLessons: any;
  loading: boolean =false;
  primary = "white";
  constructor(public dialog: MatDialog, private api: ApiService) { }

  ngOnInit(): void {
    this.getAllLessons();
    
  }
  toggleFullText() {
    this.showFullText = !this.showFullText;
  }
  formatText(text: any) {
    return text.replace(/\n/g, '<br>');
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
    this.isVideoLoading = true;
    this.api.getLesson().subscribe({
      next:(response)=>{
        this.mritangaLessons = response;
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
    this.isVideoLoading = false;
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
