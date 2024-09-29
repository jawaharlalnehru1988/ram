import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NavigationComponent } from '../navigation.component';
import { EventsComponent } from 'src/app/events/events.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  standalone: true,
  imports: [RouterLink, NavigationComponent, EventsComponent]
})
export class HomeComponent {
  buttons = [
    { label: 'Ekadasi', route: '/ekadasi' },
    { label: 'Button 2', route: '/button2' },
    { label: 'Button 3', route: '/button3' }
  ];

  items = [
    { routerLink: '/srilaPrabhupada', imgSrc: 'assets/images/aboutPrabhupad.jpeg', altText: 'About Prabhupada' },
    { routerLink: '/japa', imgSrc: 'assets/images/chantWithPrabhupad.jpeg', altText: 'Chant with Prabhupada' },
    { routerLink: '/kirtan-lesson/mritanga', imgSrc: 'assets/images/mritangalesso.jpeg', altText: 'Mritanga Lesson' },
    { routerLink: '/kirtan-lesson', imgSrc: 'assets/images/karathalPrabhupad.jpeg', altText: 'Karathal Prabhupada' },
    { routerLink: '/festival', imgSrc: 'assets/images/arat.jpeg', altText: 'Arati' },
    { routerLink: '/audiokirtan', imgSrc: 'assets/images/kirtan.jpeg', altText: 'Kirtans' },
    { routerLink: '', imgSrc: 'assets/images/foru.jpeg', altText: 'Forum' },
    { routerLink: '/calendar', imgSrc: 'assets/images/calende.jpeg', altText: 'Calendar' },
    { routerLink: '', imgSrc: 'assets/images/cook.jpeg', altText: 'Cooks' },
    { routerLink: '/books', imgSrc: 'assets/images/book.jpeg', altText: 'Books' },
    { routerLink: '', imgSrc: 'assets/images/sloka.jpeg', altText: 'Slokas' },
    { routerLink: '', imgSrc: 'assets/images/diksh.jpeg', altText: 'Diksha' },
    { routerLink: '', imgSrc: 'assets/images/matrimon.jpeg', altText: 'Matrimony' },
    // { routerLink: '', imgSrc: 'assets/images/things.png', altText: 'Things' },
    { routerLink: '/images', imgSrc: 'assets/images/phot.jpeg', altText: 'Photo' },
    { routerLink: '', imgSrc: 'assets/images/donat.jpeg', altText: 'Donate' }
  ];
}
