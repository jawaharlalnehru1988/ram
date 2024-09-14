import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  buttons = [
    { label: 'Ekadasi', route: '/ekadasi' },
    { label: 'Button 2', route: '/button2' },
    { label: 'Button 3', route: '/button3' }
  ];
}
