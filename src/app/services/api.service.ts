import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http : HttpClient) { }
  postLesson(data:any){
    return this.http.post<any>("http://localhost:3000/lessons", data);
  }
  getLesson(){
return this.http.get<any>("https://drab-gold-fly-yoke.cyclic.app/mritangaLessons");
  }
//   getLesson(){
// return this.http.get<any>("http://localhost:3000/lessons");
//   }
  updateLessons(data:any, id: number){
    return this.http.put<any>("http://localhost:3000/lessons/"+id, data);
  }
  deleteLesson(id:number){
    return this.http.delete<any>("http://localhost:3000/lessons/"+id);
  }

  // getMenus(){
  //   return this.http.get<any>('http://localhost:3000/menus');
  // }

  getMenus(){
    return this.http.get<any>('https://drab-gold-fly-yoke.cyclic.app/menus');
  }
  getEvents(){
    return this.http.get<any>('http://localhost:3000/eventdetails');
  }
  getUserInfo(){
    return this.http.get<any>('https://drab-gold-fly-yoke.cyclic.app/profile');
  }
  getAudio(){
    return this.http.get<any>('https://drab-gold-fly-yoke.cyclic.app/audioKirtans')
  }
}
