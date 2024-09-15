import { Component, OnInit } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import { RouterLink } from '@angular/router';
import {MatMenuModule} from '@angular/material/menu';
import {MatToolbarModule} from '@angular/material/toolbar';
import { NgFor, NgIf } from '@angular/common';

interface RouterData {
  routerPath: string
  routerLink: string
}
@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css'],
  standalone: true,
  imports: [RouterLink, MatTooltipModule, MatIconModule,MatMenuModule, MatToolbarModule, NgFor]
})
export class NavigationComponent implements OnInit {
  userName:string = 'Srila Prabhupada';
  allRouterPath: RouterData[] = [
    {routerPath: '', routerLink: ''}
  ]
  constructor() { }

  ngOnInit(): void {
  

  }
 
}
