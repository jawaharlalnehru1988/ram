import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { InfoCollectComponent } from '../info-collect/info-collect.component';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {
  
  buttons = [
    { label: 'Ekadasi', route: '/ekadasi' },
    { label: 'Button 2', route: '/button2' },
    { label: 'Button 3', route: '/button3' }
  ];
  constructor(private dialog: MatDialog,) { }

  ngOnInit(): void {
  

  }
 
}
