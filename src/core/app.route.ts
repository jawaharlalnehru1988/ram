import { Routes } from '@angular/router';

export const appRoutes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'home',
    loadComponent: () =>
      import('../app/navigation/home/home.component').then(
        (m) => m.HomeComponent
      ),
  },
  {
    path: 'footer',
    loadComponent: () =>
      import('../app/navigation/footer/footer.component').then(
        (m) => m.FooterComponent
      ),
  },
  {
    path: 'srilaPrabhupada',
    loadComponent: () =>
      import('../app/article/srila-prabhupada/srila-prabhupada.component').then(
        (m) => m.SrilaPrabhupadaComponent
      ),
  },
  {
    path: 'calendar',
    loadComponent: () =>
      import('../app/calender/calender.component').then(
        (m) => m.CalenderComponent
      ),
  },
  {
    path: 'japa',
    loadComponent: () =>
      import('../app/japa/japa.component').then((m) => m.JapaComponent),
  },
  {
    path: 'kirtan-lesson',
    loadComponent: () =>
      import('../app/kirtan-lesson/kirtan-lesson.component').then(
        (m) => m.KirtanLessonComponent
      ),
  },
  {
    path: 'books',
    loadComponent: () =>
      import('../app/books/books.component').then((m) => m.BooksComponent),
  },
  {
    path: 'images',
    loadComponent: () =>
      import('../app/images/images.component').then((m) => m.ImagesComponent),
  },
  {
    path: 'arati-songs',
    loadComponent: () =>
      import('../app/arati-songs/arati-songs.component').then(
        (m) => m.AratiSongsComponent
      ),
  },
  {
    path: 'festival',
    loadComponent: () =>
      import('../app/arati-songs/festival/festival.component').then(
        (m) => m.FestivalComponent
      ),
  },
  {
    path: 'guruparampara',
    loadComponent: () =>
      import(
        '../app/article/srila-prabhupada/guruparampara/guruparampara.component'
      ).then((m) => m.GuruparamparaComponent),
  },
  {
    path: 'user/:id',
    loadComponent: () =>
      import(
        '../app/article/srila-prabhupada/guru-details/guru-details.component'
      ).then((m) => m.GuruDetailsComponent),
  },
  {
    path: 'kirtan-lesson/mritanga',
    loadComponent: () =>
      import('../app/kirtan-lesson/mritanga/mritanga.component').then(
        (m) => m.MritangaComponent
      ),
  },
  {
    path: 'audiokirtan',
    loadComponent: () =>
      import('../app/kirtan-lesson/audio-kirtan/audio-kirtan.component').then(
        (m) => m.AudioKirtanComponent
      ),
  },
  {
    path: '**',
    redirectTo: 'home',
  },
];
