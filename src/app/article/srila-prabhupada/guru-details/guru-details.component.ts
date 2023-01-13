import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-guru-details',
  templateUrl: './guru-details.component.html',
  styleUrls: ['./guru-details.component.css']
})
export class GuruDetailsComponent implements OnInit {
  guruInfo: any;

  constructor(private route: ActivatedRoute, private httpClient:HttpClient) { }

  ngOnInit(): void {
    console.log(this.route.snapshot.params['id']);
    let id = this.route.snapshot.params['id'];

    this.getUser(id);
    
  }
  getUser(id:any){
    this.httpClient.get("https://sheetdb.io/api/v1/ufofhn680ebn3/search?sheet=guruParampara&id="+id).subscribe((res:any)=>{
      console.log("res", res);
      this.guruInfo = res;
    })
  }


}
