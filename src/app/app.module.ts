import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule, routes } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavigationComponent } from './navigation/navigation.component';
import { FooterComponent } from './navigation/footer/footer.component';
import { SrilaPrabhupadaComponent } from './article/srila-prabhupada/srila-prabhupada.component';
import { BooksComponent } from './books/books.component';
import { CustomePipePipe } from './kirtan-lesson/custome-pipe.pipe';
import { AccessPipe } from './kirtan-lesson/access.pipe';
import { ImagesComponent } from './images/images.component';
import { MonthConvertPipe } from './calender/month-convert.pipe';
import { GuruDetailsComponent } from './article/srila-prabhupada/guru-details/guru-details.component';
import { FestivalComponent } from './arati-songs/festival/festival.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { HomeComponent } from './navigation/home/home.component';
import { MatMenuModule } from '@angular/material/menu';
import { MatTooltipModule } from '@angular/material/tooltip';
import { provideRouter } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    FooterComponent,
    SrilaPrabhupadaComponent,
    BooksComponent,
    CustomePipePipe,
    AccessPipe,
    ImagesComponent,
    MonthConvertPipe,
    GuruDetailsComponent,
    FestivalComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatMenuModule,
    MatTooltipModule,
    MatIconModule,
  ],
  providers: [provideRouter(routes)],
  bootstrap: [AppComponent],
})
export class AppModule { }
