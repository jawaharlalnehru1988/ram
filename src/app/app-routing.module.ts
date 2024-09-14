import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AratiSongsComponent } from './arati-songs/arati-songs.component';
import { FestivalComponent } from './arati-songs/festival/festival.component';
import { GuruDetailsComponent } from './article/srila-prabhupada/guru-details/guru-details.component';
import { GuruparamparaComponent } from './article/srila-prabhupada/guruparampara/guruparampara.component';
import { SrilaPrabhupadaComponent } from './article/srila-prabhupada/srila-prabhupada.component';
import { BooksComponent } from './books/books.component';
import { CalenderComponent } from './calender/calender.component';
import { ImagesComponent } from './images/images.component';
import { JapaComponent } from './japa/japa.component';
import { AudioKirtanComponent } from './kirtan-lesson/audio-kirtan/audio-kirtan.component';
import { KirtanLessonComponent } from './kirtan-lesson/kirtan-lesson.component';
import { MritangaComponent } from './kirtan-lesson/mritanga/mritanga.component';
import { FooterComponent } from './navigation/footer/footer.component';
import { HomeComponent } from './navigation/home/home.component';

export const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'footer', component: FooterComponent },
  { path: "srilaPrabhupada", component: SrilaPrabhupadaComponent },
  { path: "calendar", component: CalenderComponent },
  { path: "japa", component: JapaComponent },
  {path:'kirtan-lesson', component: KirtanLessonComponent},
  {path: 'books', component: BooksComponent},
  {path: 'images', component: ImagesComponent},
  {path: 'arati-songs', component: AratiSongsComponent},
  {path: 'festival', component: FestivalComponent},
  {path: 'guruparampara', component: GuruparamparaComponent},
  {path: 'user/:id', component: GuruDetailsComponent},
  {path: 'kirtan-lesson/mritanga', component: MritangaComponent},
  {path: 'audiokirtan', component: AudioKirtanComponent},
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: '**', redirectTo: '/home'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
