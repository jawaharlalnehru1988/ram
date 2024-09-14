import { HttpClient } from '@angular/common/http';
import {AfterViewInit, Component,  OnInit, ViewChild} from '@angular/core';
import {MatLegacyPaginator as MatPaginator} from '@angular/material/legacy-paginator';
import {MatLegacyTableDataSource as MatTableDataSource} from '@angular/material/legacy-table';
import {MatSort} from '@angular/material/sort';
import {MatLegacyDialog as MatDialog} from '@angular/material/legacy-dialog';
import { AddDialogComponent } from './add-dialog/add-dialog.component';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}
@Component({
  standalone: true,
  imports: [MatFormFieldModule, MatTableModule, RouterModule, MatPaginatorModule, CommonModule, MatIconModule],
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
    this.httpClient.get('https://jagannathadasa16.github.io/bookApi/guruparamapara.json').subscribe({
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
