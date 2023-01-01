import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AratiSongsComponent } from './arati-songs/arati-songs.component';
import { SrilaPrabhupadaComponent } from './article/srila-prabhupada/srila-prabhupada.component';
import { BooksComponent } from './books/books.component';
import { CalenderComponent } from './calender/calender.component';
import { ImagesComponent } from './images/images.component';
import { JapaComponent } from './japa/japa.component';
import { KirtanLessonComponent } from './kirtan-lesson/kirtan-lesson.component';
import { FooterComponent } from './navigation/footer/footer.component';
import { NavigationComponent } from './navigation/navigation.component';

const routes: Routes = [
  { path: '', component: NavigationComponent },
  { path: 'navigation', component: NavigationComponent },
  { path: 'footer', component: FooterComponent },
  { path: "srilaPrabhupada", component: SrilaPrabhupadaComponent },
  { path: "calendar", component: CalenderComponent },
  { path: "japa", component: JapaComponent },
  {path:'kirtan-lesson', component: KirtanLessonComponent},
  {path: 'books', component: BooksComponent},
  {path: 'images', component: ImagesComponent},
  {path: 'arati-songs', component: AratiSongsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
