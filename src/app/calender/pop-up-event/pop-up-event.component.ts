import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-pop-up-event',
  templateUrl: './pop-up-event.component.html',
  styleUrls: ['./pop-up-event.component.css']
})
export class PopUpEventComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit(): void {
        
    }
    
  }


