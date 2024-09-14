import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogModule } from '@angular/material/dialog';
import { MAT_LEGACY_DIALOG_DATA as MAT_DIALOG_DATA } from '@angular/material/legacy-dialog';

@Component({
  standalone: true,
  imports: [MatDialogModule,],
  selector: 'app-pop-up-event',
  templateUrl: './pop-up-event.component.html',
  styleUrls: ['./pop-up-event.component.css']
})
export class PopUpEventComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit(): void {
        
    }
    
  }


