import { Component, OnInit } from '@angular/core';
interface RouterData {
  routerPath: string
  routerLink: string
}
@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
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
