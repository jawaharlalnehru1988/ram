import { CommonModule, DatePipe, getLocaleMonthNames } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, NgModel, NgModelGroup } from '@angular/forms';
import { CalendarModule } from 'primeng/calendar';
interface YearlyEvent {
  month: string; 
  events: Event[];
}
interface Event {
  date: string; 
  name: string;
}

@Component({
  selector: 'app-events',
  standalone: true,
  imports: [CalendarModule, FormsModule],
  providers: [DatePipe],
  templateUrl: './events.component.html',
  styleUrl: './events.component.scss'
})
export class EventsComponent {
  date1: Date | undefined;
  monthNames = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ];
  now = new Date();
 
  
  yearlyEvents:  YearlyEvent[]= [
    {
      month: 'September', 
      events:  [
      { date: '11-Sep-2024', name: 'Srimati Radha Rani Janmashtami Celebration' },
      { date: '15-Sep-2024', name: 'Sri Vamana Dvadasi' },
      { date: '15-Sep-2024', name: 'Srila Jiva Gosvami Appearance Day' },
      { date: '16-Sep-2024', name: 'Srila Bakthivinoda thakura Appearance Day' },
      { date: '17-Sep-2024', name: 'Ananda Chaturdasi Vrata' },
      { date: '17-Sep-2024', name: 'Srila Haridasa Thakura Disappearance Day' },
      { date: '17-Sep-2024', name: 'The end of the second month of Chaturmasya' },
      { date: '18-Sep-2024', name: 'Bhadra Purnima' },
      { date: '18-Sep-2024', name: 'Sri Visvarupa Mahotsava' },
      { date: '18-Sep-2024', name: 'The Beginning of the third month of Chaturmasya' },
    ]
  },
  {
    month: 'October', 
    events:  [
      { date: '10-Oct-2024', name: 'Durga Puja' },
      { date: '13-Oct-2024', name: 'Ramacandra Vijayotsava' },
      { date: '13-Oct-2024', name: 'Sri Madhavacharya Appearance Day' },
      { date: '15-Oct-2024', name: 'Srila Raghunatha Dasa gosvami Disappearance Day' },
      { date: '15-Oct-2024', name: 'Srila Raghunatha Bhatta Gosvami Disappearance Day' },
      { date: '15-Oct-2024', name: 'Srila Krsnadasa Kaviraja Gosvami Disappearance Day' },
      { date: '17-Oct-2024', name: 'Lakshmi Puja' },
      { date: '17-Oct-2024', name: 'Sri Krishna Saradiya Rasayatra' },
      { date: '17-Oct-2024', name: 'Sri Murari Gupta Disappearance Day' },
      { date: '17-Oct-2024', name: 'The beginning of the fourth month of Chaturmasya' },
      { date: '21-Oct-2024', name: 'Srila Narottama Dasa Thakura Disappearance Day' },
      { date: '24-Oct-2024', name: 'Baghulashtami' },
      { date: '25-Oct-2024', name: 'Sri Virabhatra Appearance Day' },
    ]
  },
  {
    month: 'November', 
    events:  [
      { date: '01-Nov-2024', name: 'Diwali Kali Puja' },
      { date: '03-Oct-2024', name: 'Sri Vasudeva Ghosh Disappearance Day' },
      { date: '05-Oct-2024', name: 'Srils Prabhupada Disappearance Day' },
      { date: '09-Oct-2024', name: 'Sri  Gadadhara Dasa Gosvami Disappearance Day' },
      { date: '09-Oct-2024', name: 'Sri  Dhananjaya Pandita Disappearance Day' },
      { date: '09-Oct-2024', name: 'Sri  Srinivasa Acarya Disappearance Day' },
      { date: '12-Oct-2024', name: 'Srila Gaura Kishora Dasa Babaji Disappearance Day' },
      { date: '15-Oct-2024', name: 'Sri  Bhugarpha Gosvami Disappearance Day' },
      { date: '15-Oct-2024', name: 'Sri  Kasisvara Pandita Disappearance Day' },
      { date: '15-Oct-2024', name: 'The end of the Fourth month of chaturmasya' },
      { date: '16-Oct-2024', name: 'Sri Nimbarkacarya Appearance Day' },
      { date: '26-Oct-2024', name: 'Sri Narahari Sarakara Thakura Disappearance Day' },
      { date: '27-Oct-2024', name: 'Sri kaliya Krishnadasa Disappearance Day' },
      { date: '29-Oct-2024', name: 'Sri Saranga Thakura Disappearance Day' },
  ]
  },
  {
    month: 'December', 
    events:  [
      { date: '19-Dec-2024', name: 'Srila Bakthi siddhanta Sarasvati Thakura Disappearance Day' },
      { date: '26-Dec-2024', name: 'Sri Devananda Pandita Disappearance Day' },
      { date: '28-Dec-2024', name: 'Sri Sri Mahesa Pandita Disappearance Day' },
      { date: '28-Dec-2024', name: 'Sri Uddharana Datta Thakura Disappearance Day' },
      { date: '31-Dec-2024', name: 'Sri Locana Dasa Thakura Appearance Day' },
  ]
  },
  {
    month: 'January', 
    events:  [
      { date: '02-Jan-2025', name: 'Srila Jiva Gosvami Disappearance Day' },
      { date: '02-Jan-2025', name: 'Sri Jagadisa Pandita Disappearance Day' },
      { date: '11-Jan-2025', name: 'Sri Jagadisa Pandita Appearance Day' },
      { date: '18-Jan-2025', name: 'Sri Ramacandra Kavira Disappearance Day' },
      { date: '18-Jan-2025', name: 'Srila Gopala Bhatta Gosvami Appearance Day' },
      { date: '20-Jan-2025', name: 'Sri Jayadeva Gosvami disapearance Day' },
      { date: '21-Jan-2025', name: 'Sri Locana Dasa Thakura Disapearance Day' },
  ]
  },
  {
    month: 'Febuary', 
    events:  [
      { date: '03-Feb-2025', name: 'Vasanta Pancami' },
      { date: '03-Feb-2025', name: 'Srimati Vishnupriya Devi Appearance Day' },
      { date: '03-Feb-2025', name: 'Srila visvanatha chakravarthi Thakura Disppearance Day' },
      { date: '03-Feb-2025', name: 'Sri Pundarika Vidyanidhi Appearance Day' },
      { date: '03-Feb-2025', name: 'Sri Raghunandana Thakura Appearance Day' },
      { date: '03-Feb-2025', name: 'Srila Raghunatha Dasa Gosvami Appearance Day' },
      { date: '04-Feb-2025', name: 'Sri Advaita Acarya Appearance Day' },
      { date: '06-Feb-2025', name: 'Sri Madhvacharya Disppearance Day' },
      { date: '07-Feb-2025', name: 'Sri Ramanujacharya Disppearance Day' },
      { date: '09-Feb-2025', name: 'Appearance of Lord Varahadeva' },
      { date: '10-Feb-2025', name: 'Sri Nithyandha Prabu Appearance Day' },
      { date: '12-Feb-2025', name: 'Sri Narottama Dasa Thakura Appearance Day' },
      { date: '17-Feb-2025', name: 'Srila Bhakthisiddhanta Sarasvati Thakura Appearance Day' },
      { date: '25-Feb-2025', name: 'Sri Isvara Puri Disppearance Day' },
      { date: '28-Feb-2025', name: 'Sri Jagannatha Dasa Babaji Disppearance Day' },
      { date: '28-Feb-2025', name: 'Sri Rasikananda Disppearance Day' },
  ]
  },
  {
  month: 'March', 
  events:  [
    { date: '03-Mar-2025', name: 'Sri Purushottama Dasa Thakura Appearance Day' },
    { date: '11-Mar-2025', name: 'Sri Madhavendra Puri disappearance Day' },
    { date: '14-Mar-2025', name: 'Gaura Purnima Appearance of Sri Caitanya Mahaprabhu' },
    { date: '15-Mar-2025', name: 'jagannatha Misra Festival' },
    { date: '22-Mar-2025', name: 'Sri Srivasa Pandita Appearance Day' },
    { date: '26-Mar-2025', name: 'Sri Govinda Ghosh Disappearance Day' },
   ]
},
{
  month: 'April', 
  events:  [
    { date: '02-Apr-2025', name: 'Sri Ramanujacarya Appearance Day' },
    { date: '12-Apr-2025', name: 'Radha Kunda Appearance Day' },
    { date: '12-Apr-2025', name: 'Sri Balarama Rasayatra' },
    { date: '12-Apr-2025', name: ' Sri Krishna Vasanta Rasayatra' },
    { date: '12-Apr-2025', name: 'Sri Vamsivadana Thakura Appearance' },
    { date: '12-Apr-2025', name: 'Sri Syamananda Prabhu Appearance Day' },
    { date: '20-Apr-2025', name: 'Sri Abhhirama Thakura Disappearance Day' },
    { date: '23-Apr-2025', name: 'Srila Virndavana Dasa Thakura Disappearance Day' },
    { date: '27-Apr-2025', name: 'Sri Gadadhara Pandita Appearance Day' },
   ]
},
{
  month: 'May', 
  events:  [
    { date: '06-May-2025', name: 'Srimathi Sita Devi Appearance Day(Console of lord Rama)' },
    { date: '09-May-2025', name: 'Rukmini Dvadasi' },
    { date: '10-May-2025', name: 'Sri Jayananda Prabhu Disappearance Day' },
    { date: '11-May-2025', name: 'Lord Narasimha Deva appearance Day' },
    { date: '12-May-2025', name: 'Sri Parameshvari Dasa Thakur disappearance Day' },
    { date: '12-May-2025', name: 'Sri sri Radha Ramana Devaji Appearance Day' },
    { date: '12-May-2025', name: 'Sri Madhavendra Puri Appearance Day' },
    { date: '12-May-2025', name: 'Sri Srinivasa Acharya Appearance Day' },
    { date: '17-May-2025', name: 'Sri Ramananda Raya Disappearance Day' },
    { date: '24-May-2025', name: 'Srila Vrindavana Dasa Thakura Appearance Day' },
   ]
},
{
  month: 'June', 
  events:  [
    { date: '05-June-2025', name: 'Sri Baladeva Vidhya Bhushana Disappearance Day' },
    { date: '05-June-2025', name: 'Srimathi Gangamata Gosvamini Appearance Day' },
    { date: '11-June-2025', name: 'Sri Mukunda Datta Disappearance Day' },
    { date: '11-June-2025', name: 'Sri Sridhara Pandita Disappearance Day' },
    { date: '12-June-2025', name: 'Sri Syamananda Prabhu Disappearance Day' },
    { date: '16-June-2025', name: 'Sri Vakresvara Pandita Appearance Day' },
    { date: '21-June-2025', name: 'Sri Srivasa Pandita Disappearance Day' },
    { date: '25-June-2025', name: 'Sri Bakthivinoda Thakura Disappearance Day' },
    { date: '25-June-2025', name: 'Sri Gadhadara Pandita Disappearance Day' },
    { date: '27-June-2025', name: 'Sri Svaroopa Damodara Gosvami Disappearance Day' },
    { date: '27-June-2025', name: 'Sri Sivananda Sena Disappearance Day' },
   ]
},
{
  month: 'July', 
  events:  [
    { date: '01-July-2025', name: 'Sri Vakrasevara Pandita Disappearance Day' },
    { date: '10-July-2025', name: 'Guru Purnima' },
    { date: '15-July-2025', name: 'Sri Gopala Bhatta Gosvami Disappearance Day' },
    { date: '18-July-2025', name: 'Sri Lokanatha Gosvami Disappearance Day' },
    { date: '28-July-2025', name: 'Sri RAghunandana Thakura Disappearance Day' },
    { date: '28-July-2025', name: 'Sri Vamsidasa Babaji Disappearance Day' },
  ]
},
{
  month: 'August', 
  events:  [
    { date: '06-Aug-2025', name: 'Srila Rupa Gosvami Disappearance Day' },
    { date: '06-Aug-2025', name: 'Sri Gouridasa Pandita Disappearance Day' },
    { date: '09-Aug-2025', name: 'Sri Lord Balarama Appearance Day' },
    { date: '09-Aug-2025', name: 'The Beginning of the Second month of Chaturmasya' },
    { date: '16-Aug-2025', name: 'Sri Krishna Jenmashtami' },
    { date: '17-Aug-2025', name: 'Srila Prabhupada Appearance Day' },
    { date: '28-Aug-2025', name: 'Srimathi Sita Thakurani Appearance Day (Sri Advaita Consort)' },
    { date: '31-Aug-2025', name: 'Radhashtami : Srimathi Radharani Appearance Day' },
   
  ]
},
  ];
  currentDate!: string | null;
  currentMonthObj: YearlyEvent[] = [];
  currentMonth: string = '';
  constructor(private datePipe: DatePipe) {}
  ngOnInit(): void {  

    console.log('date1 :', this.date1);
      const now = new Date();
    this.currentMonth = this.monthNames[now.getMonth()];

      this.currentMonthObj = this.yearlyEvents.filter((obj) => obj.month === this.currentMonth);
      
  }
}
 