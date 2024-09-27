import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  standalone: true,
  imports: [RouterLink]
})
export class HomeComponent {
  buttons = [
    { label: 'Ekadasi', route: '/ekadasi' },
    { label: 'Button 2', route: '/button2' },
    { label: 'Button 3', route: '/button3' }
  ];

  items = [
    { routerLink: '/srilaPrabhupada', imgSrc: 'assets/images/aboutPrabhupada.png', altText: 'About Prabhupada' },
    { routerLink: '/japa', imgSrc: 'assets/images/chantWithPrabhupada.png', altText: 'Chant with Prabhupada' },
    { routerLink: '/kirtan-lesson/mritanga', imgSrc: 'assets/images/mritangalesson.png', altText: 'Mritanga Lesson' },
    { routerLink: '/kirtan-lesson', imgSrc: 'assets/images/karathalPrabhupada.png', altText: 'Karathal Prabhupada' },
    { routerLink: '/festival', imgSrc: 'assets/images/arati.png', altText: 'Arati' },
    { routerLink: '/audiokirtan', imgSrc: 'assets/images/kirtans.png', altText: 'Kirtans' },
    { routerLink: '', imgSrc: 'assets/images/forum.png', altText: 'Forum' },
    { routerLink: '/calendar', imgSrc: 'assets/images/calender.png', altText: 'Calendar' },
    { routerLink: '', imgSrc: 'assets/images/cooks.png', altText: 'Cooks' },
    { routerLink: '/books', imgSrc: 'assets/images/books.png', altText: 'Books' },
    { routerLink: '', imgSrc: 'assets/images/slokas.png', altText: 'Slokas' },
    { routerLink: '', imgSrc: 'assets/images/diksha.png', altText: 'Diksha' },
    { routerLink: '', imgSrc: 'assets/images/matrimony.png', altText: 'Matrimony' },
    // { routerLink: '', imgSrc: 'assets/images/things.png', altText: 'Things' },
    { routerLink: '/images', imgSrc: 'assets/images/photo.png', altText: 'Photo' },
    { routerLink: '', imgSrc: 'assets/images/donate.png', altText: 'Donate' }
  ];
}
