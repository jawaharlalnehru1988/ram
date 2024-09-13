import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavigationComponent } from './navigation/navigation.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule} from '@angular/material/form-field';
import { MatDialogModule } from '@angular/material/dialog';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { HttpClientModule } from '@angular/common/http';
import { MatMenuModule } from '@angular/material/menu';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatRippleModule } from '@angular/material/core';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatTableModule } from '@angular/material/table';
import { FooterComponent } from './navigation/footer/footer.component';
import { InfoCollectComponent } from './info-collect/info-collect.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { SrilaPrabhupadaComponent } from './article/srila-prabhupada/srila-prabhupada.component';
import { CalenderComponent } from './calender/calender.component';
import { FullCalendarModule } from '@fullcalendar/angular'; // must go before plugins
import dayGridPlugin from '@fullcalendar/daygrid'; // a plugin!
import interactionPlugin from '@fullcalendar/interaction';
import { PopUpEventComponent } from './calender/pop-up-event/pop-up-event.component';
import { JapaComponent } from './japa/japa.component';
import { MatListModule } from '@angular/material/list';
import { MatSliderModule } from '@angular/material/slider';
import { MatCardModule } from '@angular/material/card';
import { KirtanLessonComponent } from './kirtan-lesson/kirtan-lesson.component';
// import { NgxYoutubePlayerModule } from 'ngx-youtube-player';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { BooksComponent } from './books/books.component';
import { CustomePipePipe } from './kirtan-lesson/custome-pipe.pipe';
import { AccessPipe } from './kirtan-lesson/access.pipe';
import { ImagesComponent } from './images/images.component';
import { AratiSongsComponent } from './arati-songs/arati-songs.component';
import { ConvertPipe } from './calender/convert.pipe';
import { MonthConvertPipe } from './calender/month-convert.pipe';
import { GuruparamparaComponent } from './article/srila-prabhupada/guruparampara/guruparampara.component';
import { GuruDetailsComponent } from './article/srila-prabhupada/guru-details/guru-details.component';
import { AddDialogComponent } from './article/srila-prabhupada/guruparampara/add-dialog/add-dialog.component';
import { MritangaComponent } from './kirtan-lesson/mritanga/mritanga.component';
import { KirtanDialogComponent } from './kirtan-lesson/kirtan-dialog/kirtan-dialog.component';
import { MatSelectModule } from '@angular/material/select';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { AudioKirtanComponent } from './kirtan-lesson/audio-kirtan/audio-kirtan.component';
import { LoginComponent } from './info-collect/login/login.component';
import { FestivalComponent } from './arati-songs/festival/festival.component';
import {MatCheckboxModule} from '@angular/material/checkbox'; 
import {MatSlideToggleModule} from '@angular/material/slide-toggle'; 
import {MatProgressBarModule} from '@angular/material/progress-bar'; 
FullCalendarModule.registerPlugins([ // register FullCalendar plugins
  dayGridPlugin,
  interactionPlugin
]);
@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    FooterComponent,
    InfoCollectComponent,
    SrilaPrabhupadaComponent,
    CalenderComponent,
    PopUpEventComponent,
    JapaComponent,
    KirtanLessonComponent,
    BooksComponent,
    CustomePipePipe,
    AccessPipe,
    ImagesComponent,
    AratiSongsComponent,
    ConvertPipe,
    MonthConvertPipe,
    GuruparamparaComponent,
    GuruDetailsComponent,
    AddDialogComponent,
    MritangaComponent,
    KirtanDialogComponent,
    ToolbarComponent,
    AudioKirtanComponent,
    LoginComponent,
    FestivalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonToggleModule,
    MatProgressSpinnerModule,
    MatCardModule,
    MatSliderModule,
    MatProgressBarModule,
    MatDialogModule,
    MatListModule,
    MatRippleModule,
    MatMenuModule,
    MatTableModule,
    MatPaginatorModule,
    MatTooltipModule,
    FormsModule,
    MatSelectModule,
    MatInputModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatIconModule,
    MatButtonModule,
    HttpClientModule,
    FlexLayoutModule,
    FullCalendarModule,
    MatCheckboxModule,
    MatSlideToggleModule,
    // NgxYoutubePlayerModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
