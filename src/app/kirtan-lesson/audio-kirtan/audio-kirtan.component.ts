import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { ApiService } from 'src/app/services/api.service';
import { KirtanDialogComponent } from '../kirtan-dialog/kirtan-dialog.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { CommonModule } from '@angular/common';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatDialog } from '@angular/material/dialog';

@Component({
  standalone: true,
  imports: [MatFormFieldModule, CommonModule, MatTableModule, MatPaginatorModule],
  selector: 'app-audio-kirtan',
  templateUrl: './audio-kirtan.component.html',
  styleUrls: ['./audio-kirtan.component.css']
})
export class AudioKirtanComponent implements OnInit {
  displayedColumns: any[] = [ 'audioLink'];
  dataSource!: MatTableDataSource<any>;
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  constructor(private dialog: MatDialog, private api: ApiService) { }

  ngOnInit(): void {
    this.getAudioInfo();
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
  openDialog(){
    this.dialog.open(KirtanDialogComponent,{
width: "450px"
    })
  }
  getAudioInfo(){
    this.api.getAudio().subscribe({
      next: (res)=>{
        console.log(res);
        this.dataSource = new MatTableDataSource(res);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort; 
        
      }, error:(err)=>{
        alert(' audio source not available')
      }
    })
  }
}
