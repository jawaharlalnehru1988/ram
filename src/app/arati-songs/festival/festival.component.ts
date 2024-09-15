import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-festival',
  templateUrl: './festival.component.html',
  styleUrls: ['./festival.component.css'],
  standalone: true
})
export class FestivalComponent implements OnInit {
  showfestival: boolean = true;
  constructor(private api: ApiService) { }

  ngOnInit(): void {
  }
  openArati(){
    
    this.api.receiveArati(this.showfestival)
  }
}
