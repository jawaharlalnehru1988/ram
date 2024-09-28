import { HttpClient } from '@angular/common/http';
import {AfterViewInit, Component,  inject,  OnInit, ViewChild} from '@angular/core';
import {MatSort} from '@angular/material/sort';
import { AddDialogComponent } from './add-dialog/add-dialog.component';
import { RouterModule } from '@angular/router';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';

import { MatIconModule } from '@angular/material/icon';
import {
  MatDialog,
} from '@angular/material/dialog';

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}
@Component({
  standalone: true,
  imports: [MatFormFieldModule, MatTableModule, RouterModule, MatPaginatorModule, MatIconModule],
  selector: 'app-guruparampara',
  templateUrl: './guruparampara.component.html',
  styleUrls: ['./guruparampara.component.css']
})
export class GuruparamparaComponent implements OnInit {
  displayedColumns: any[] = ['id', 'acharyaName', 'photo', 'details', 'edit', 'delete'];
  dataSource!: MatTableDataSource<any>;
  private httpClient  = inject(HttpClient);
  private dialog = inject(MatDialog);
  
  acharyas: any;
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

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
