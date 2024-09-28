import { CommonModule, DatePipe } from '@angular/common';
import { Component, ViewEncapsulation, } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {MatCalendarCellClassFunction, MatDatepickerModule} from '@angular/material/datepicker';
import {MatCardModule} from '@angular/material/card';
import { MatNativeDateModule, provideNativeDateAdapter } from '@angular/material/core';
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
  imports: [CommonModule, MatNativeDateModule, FormsModule, MatDatepickerModule, MatCardModule],
  providers: [DatePipe, provideNativeDateAdapter()],
  templateUrl: './events.component.html',
  styleUrl: './events.component.scss',
})
export class EventsComponent {
  date1: Date | undefined;
  selected: Date = new Date('2024-09-20');
  specialDates = [
    new Date(2024, 8, 17), // September 17, 2024
    new Date(2024, 8, 18)  // September 18, 2024
  ];
  dateClass = (date: Date): string => {
    const dateString = date.toDateString();
    return this.specialDates.some(d => d.toDateString() === dateString) ? 'special-date' : '';
  };
  monthNames = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ];
  now = new Date();
  isTamilOrEnglish:boolean = true;
  tamilYearEvents: YearlyEvent[] = [
    {
      "month": "செப்டம்பர்",
      "events": [
        { date: "11-செப்-2024", name: "ஸ்ரீமதி ராதா ராணி ஜன்மாஷ்டமி விழா" },
        { date: "15-செப்-2024", name: "ஸ்ரீ வாமன துவாதசி" },
        { date: "15-செப்-2024", name: "ஸ்ரீல ஜீவ கோஸ்வாமி தோற்ற தினம்" },
        { date: "16-செப்-2024", name: "ஸ்ரீல பக்திவினோத் தாகூர் தோற்ற தினம்" },
        { date: "17-செப்-2024", name: "ஆனந்த சதுர்தசி விரதம்" },
        { date: "17-செப்-2024", name: "ஸ்ரீல ஹரிதாஸ் தாகூர் மறைவு தினம்" },
        { date: "17-செப்-2024", name: "சதுர்மாச்யாவின் இரண்டாவது மாதத்தின் முடிவு" },
        { date: "18-செப்-2024", name: "பத்ரா பூர்ணிமா" },
        { date: "18-செப்-2024", name: "ஸ்ரீ விஸ்வரூப மஹோத்சவம்" },
        { date: "18-செப்-2024", name: "சதுர்மாச்யாவின் மூன்றாவது மாதத்தின் தொடக்கம்" }
      ]
    },
    {
      month: 'அக்டோபர்', 
      events:  [
        { date: '10-அக்-2024', name: 'துர்கா பூஜை' },
        { date: '13-அக்-2024', name: 'ராமச்சந்திர விஜயோத்சவா' },
        { date: '13-அக்-2024', name: 'ஸ்ரீ மத்வாச்சார்யா தோற்ற நாள்' },
        { date: '15-அக்-2024', name: 'ஸ்ரீல ரகுநாத தாச கோஸ்வாமி மறைவு நாள்' },
        { date: '15-அக்-2024', name: 'ஸ்ரீல ரகுநாத பட்ட கோஸ்வாமி மறைவு நாள்' },
        { date: '15-அக்-2024', name: 'ஸ்ரீல கிருஷ்ணதாஸ் கவிராஜ கோஸ்வாமி மறைவு நாள்' },
        { date: '17-அக்-2024', name: 'லட்சுமி பூஜை' },
        { date: '17-அக்-2024', name: 'ஸ்ரீ கிருஷ்ண சரதிய ராசயாத்திரை' },
        { date: '17-அக்-2024', name: 'ஸ்ரீ முராரி குப்தா மறைவு நாள்' },
        { date: '17-அக்-2024', name: 'சதுர்மாச்யாவின் நான்காவது மாதத்தின் தொடக்கம்' },
        { date: '21-அக்-2024', name: 'ஸ்ரீல நாரோத்தம தாச தாகுர் மறைவு நாள்' },
        { date: '24-அக்-2024', name: 'பகுலாஷ்டமி' },
        { date: '25-அக்-2024', name: 'ஸ்ரீ வீரபத்ர தோற்ற நாள்' },
      ]
  },
  {
    "month": "நவம்பர்", 
    "events":  [
      { date: "01-நவ-2024", name: "தீபாவளி காளி பூஜை" },
      { date: "03-அக்-2024", name: "ஸ்ரீ வாசுதேவ கோஷ் மறைவு நாள்" },
      { date: "05-அக்-2024", name: "ஸ்ரீல பிரபுபாதர் மறைவு நாள்" },
      { date: "09-அக்-2024", name: "ஸ்ரீ கதாதர தாச கோஸ்வாமி மறைவு நாள்" },
      { date: "09-அக்-2024", name: "ஸ்ரீ தனஞ்சய பண்டிதர் மறைவு நாள்" },
      { date: "09-அக்-2024", name: "ஸ்ரீ ஸ்ரீநிவாச ஆசார்யர் மறைவு நாள்" },
      { date: "12-அக்-2024", name: "ஸ்ரீல கவுர கிஷோர் தாச பாபாஜி மறைவு நாள்" },
      { date: "15-அக்-2024", name: "ஸ்ரீ பூகர்ப கோஸ்வாமி மறைவு நாள்" },
      { date: "15-அக்-2024", name: "ஸ்ரீ காசிஸ்வர பண்டிதர் மறைவு நாள்" },
      { date: "15-அக்-2024", name: "சதுர்மாச்யாவின் நான்காவது மாதத்தின் முடிவு" },
      { date: "16-அக்-2024", name: "ஸ்ரீ நிம்பார்காசார்யர் தோற்ற நாள்" },
      { date: "26-அக்-2024", name: "ஸ்ரீ நரஹரி சரகர தாகூர் மறைவு நாள்" },
      { date: "27-அக்-2024", name: "ஸ்ரீ கலிய கிருஷ்ணதாஸ் மறைவு நாள்" },
      { date: "29-அக்-2024", name: "ஸ்ரீ சாரங்க தாகூர் மறைவு நாள்" }
    ]
}


  ];
  highlightedDates = [
    new Date('2024-09-11'),
    new Date('2024-09-15'),
    new Date('2024-09-16'),
    new Date('2024-09-17'),
    new Date('2024-09-18')
  ];
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
  date: Date[] | undefined;
  constructor() {}
  ngOnInit(): void {  

      const now = new Date();
    this.currentMonth = this.monthNames[now.getMonth()];

      this.currentMonthObj = this.yearlyEvents.filter((obj) => obj.month === this.currentMonth);
      
  }

  onDateChange(event:any){
  console.log('event :', event);

  }
  // dateClass: MatCalendarCellClassFunction<Date> = (date: Date) => {
  //   const selectedDate = new Date('23-09-2024'); // Replace with your desired date
  
  //   return date.toDateString() === selectedDate.toDateString() ? 'selected-date' : '';
  // };
  
}
 