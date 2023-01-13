import { HttpClient } from '@angular/common/http';
import {AfterViewInit, Component,  OnInit, ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import {MatSort} from '@angular/material/sort';
import {MatDialog} from '@angular/material/dialog';
import { AddDialogComponent } from './add-dialog/add-dialog.component';
import { ActivatedRoute } from '@angular/router';

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}
@Component({
  selector: 'app-guruparampara',
  templateUrl: './guruparampara.component.html',
  styleUrls: ['./guruparampara.component.css']
})
export class GuruparamparaComponent implements OnInit, AfterViewInit {
  displayedColumns: any[] = ['id', 'acharyaName', 'photo', 'details', 'edit', 'delete'];
  dataSource!: MatTableDataSource<any>;

  
  acharyas: any;
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  ngAfterViewInit() {
    // this.dataSource.paginator = this.paginator;
  }
  constructor(private httpClient: HttpClient, public dialog: MatDialog) { }
  
  ngOnInit() {
    this.getDetails();    
  }
  getDetails(){
    this.httpClient.get('https://sheetdb.io/api/v1/ufofhn680ebn3?sheet=guruParampara').subscribe({
      next:(res:any) => {
        console.log(res);
        this.dataSource = new MatTableDataSource(res);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort; 
      },
      error: (err)=>{
        console.log(err, "error while loading the data");
        
      }
      });
  }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
  openDialog(){
    this.dialog.open(AddDialogComponent)
  }
  editDetail(rowValue:any){
    this.dialog.open(AddDialogComponent, {
      width: '30%',
      data: rowValue
    })
console.log(rowValue);

  }
}
