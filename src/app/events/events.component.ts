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
        { date: "11-செப்-2024", name: "ஸ்ரீமதிராதாஷ்டமி : ஸ்ரீமதி ராதாராணியின் அவதார தினம்" },
        { date: "15-செப்-2024", name: "ஸ்ரீ வாமன துவாதசி" },
        { date: "15-செப்-2024", name: "ஸ்ரீல ஜீவ கோஸ்வாமி அவதார தினம்" },
        { date: "16-செப்-2024", name: "ஸ்ரீல பக்திவினோத தாகூரர் அவதார தினம்" },
        { date: "17-செப்-2024", name: "ஆனந்த சதுர்தசி விரதம்" },
        { date: "17-செப்-2024", name: "ஸ்ரீல ஹரிதாஸ தாகூரர் மறைவு தினம்" },
        { date: "17-செப்-2024", name: "சாதுர்மாஸ்யாவின் இரண்டாவது மாதத்தின் முடிவு" },
        { date: "18-செப்-2024", name: "பாத்ர பூர்ணிமா" },
        { date: "18-செப்-2024", name: "ஸ்ரீ விஸ்வரூப மஹோத்ஸவம்" },
        { date: "18-செப்-2024", name: "சாதுர்மாஸ்யாவின் மூன்றாவது மாதத்தின் தொடக்கம்" },
      ]
    },
    {
      month: 'அக்டோபர்', 
      events:  [
        { date: '10-அக்-2024', name: 'துர்கா பூஜை' },
        { date: '13-அக்-2024', name: 'ஸ்ரீ ராமச்சந்திர விஜயோத்சவம்' },
        { date: '13-அக்-2024', name: 'ஸ்ரீ மத்வாச்சார்யர் அவதார தினம்' },
        { date: '15-அக்-2024', name: 'ஸ்ரீல ரகுநாத தாஸ கோஸ்வாமி மறைவு தினம்' },
        { date: '15-அக்-2024', name: 'ஸ்ரீல ரகுநாத பட்ட கோஸ்வாமி மறைவு தினம்' },
        { date: '15-அக்-2024', name: 'ஸ்ரீல கிருஷ்ணதாஸ கவிராஜ கோஸ்வாமி மறைவு தினம்' },
        { date: '17-அக்-2024', name: 'ஸ்ரீமதி லட்சுமி பூஜை' },
        { date: '17-அக்-2024', name: 'ஸ்ரீ கிருஷ்ண சாரதிய ரஜயாத்திரை' },
        { date: '17-அக்-2024', name: 'ஸ்ரீ முராரி குப்தா மறைவு நாள்' },
        { date: '17-அக்-2024', name: 'சாதுர்மாஸ்யாவின் நான்காவது மாதத்தின் தொடக்கம்' },
        { date: '21-அக்-2024', name: 'ஸ்ரீல நரோத்தம தாஸ தாகுரர் மறைவு தினம்' },
        { date: '24-அக்-2024', name: 'பகுலாஷ்டமி' },
        { date: '25-அக்-2024', name: 'ஸ்ரீ வீரபத்ரர் அவதார தினம்' },
      ]
  },
  {
    "month": "நவம்பர்", 
    "events":  [
      { date: "01-நவ-2024", name: "தீபாவளி" },
      { date: "03-நவ-2024", name: "ஸ்ரீ வாசுதேவ கோஷர் மறைவு தினம்" },
      { date: "05-நவ-2024", name: "ஸ்ரீல பிரபுபாதர் மறைவு தினம்" },
      { date: "09-நவ-2024", name: "ஸ்ரீ கதாதர தாஸ கோஸ்வாமி மறைவு தினம்" },
      { date: "09-நவ-2024", name: "ஸ்ரீ தனஞ்ஜய பண்டிதர் மறைவு தினம்" },
      { date: "09-நவ-2024", name: "ஸ்ரீ ஸ்ரீநிவாச ஆச்சார்யர் மறைவு தினம்" },
      { date: "12-நவ-2024", name: "ஸ்ரீல கௌர கிஷோர தாஸ பாபாஜி மறைவு தினம்" },
      { date: "15-நவ-2024", name: "ஸ்ரீ பூகர்ப கோஸ்வாமி மறைவு தினம்" },
      { date: "15-நவ-2024", name: "ஸ்ரீ காசிஸ்வர பண்டிதர் மறைவு தினம்" },
      { date: "15-நவ-2024", name: "சாதுர்மாஸ்யாவின் நான்காவது மாதத்தின் முடிவு" },
      { date: "16-நவ-2024", name: "ஸ்ரீ நிம்பார்க ஆச்சார்யர் அவதார தினம்" },
      { date: "26-நவ-2024", name: "ஸ்ரீ நரஹரி சர்கார தாகூரர் மறைவு தினம்" },
      { date: "27-நவ-2024", name: "ஸ்ரீ காளிய கிருஷ்ணதாஸர் மறைவு தினம்" },
      { date: "29-நவ-2024", name: "ஸ்ரீ சாரங்க தாகூரர் மறைவு தினம்" },
    ]
},

{
  month: 'டிசம்பர்', 
  events: [
    { date: '19-டிச-2024', name: 'ஸ்ரீல பக்திசித்தாந்த சரஸ்வதி தாகூரர் மறைவு தினம்' },
    { date: '26-டிச-2024', name: 'ஸ்ரீ தேவானந்த பண்டிதர் மறைவு தினம்' },
    { date: '28-டிச-2024', name: 'ஸ்ரீ ஸ்ரீ மகேஷ பண்டிதர் மறைவு தினம்' },
    { date: '28-டிச-2024', name: 'ஸ்ரீ உத்தாரண தத்த தாகூரர் மறைவு தினம்' },
    { date: '31-டிச-2024', name: 'ஸ்ரீ லோசன தாஸ தாகூரர் அவதார தினம்' },
  ]
},

{
  month: 'ஜனவரி', 
  events: [
    { date: '02-ஜன-2025', name: 'ஸ்ரீல ஜீவ கோஸ்வாமி மறைவு தினம்' },
    { date: '02-ஜன-2025', name: 'ஸ்ரீ ஜெகதீஸ பண்டிதர் மறைவு தினம்' },
    { date: '11-ஜன-2025', name: 'ஸ்ரீ ஜெகதீஸ பண்டிதர் அவதார தினம்' },
    { date: '18-ஜன-2025', name: 'ஸ்ரீ இராமச்சந்திர கவிராஜர் மறைவு தினம்' },
    { date: '18-ஜன-2025', name: 'ஸ்ரீல கோபால பட்ட கோஸ்வாமி அவதார தினம்' },
    { date: '20-ஜன-2025', name: 'ஸ்ரீ ஜெயதேவ கோஸ்வாமி மறைவு தினம்' },
    { date: '21-ஜன-2025', name: 'ஸ்ரீ லோசன தாஸ தாகூரர் மறைவு தினம்' },
  ]
},

{
  month: 'பிப்ரவரி', 
  events: [
    { date: '03-பிப்-2025', name: 'வசந்த பஞ்சமி' },
    { date: '03-பிப்-2025', name: 'ஸ்ரீமதி விஷ்ணுப்ரியா தேவி அவதார தினம்' },
    { date: '03-பிப்-2025', name: 'ஸ்ரீல விஸ்வநாத சக்ரவர்த்தி தாகூரர் மறைவு தினம்' },
    { date: '03-பிப்-2025', name: 'ஸ்ரீ புண்டரீக வித்யாநிதி அவதார தினம்' },
    { date: '03-பிப்-2025', name: 'ஸ்ரீ ரகுநந்தன தாகூரர் அவதார தினம்' },
    { date: '03-பிப்-2025', name: 'ஸ்ரீல ரகுநாத தாஸ கோஸ்வாமி அவதார தினம்' },
    { date: '04-பிப்-2025', name: 'ஸ்ரீ அத்வைத ஆச்சார்யர் அவதார தினம்' },
    { date: '06-பிப்-2025', name: 'ஸ்ரீ மத்வாச்சார்யர் மறைவு  தினம்' },
    { date: '07-பிப்-2025', name: 'ஸ்ரீ இராமானுஜ ஆச்சார்யர் மறைவு  தினம்' },
    { date: '09-பிப்-2025', name: 'ஸ்ரீவராஹ தேவர் அவதார தினம்' },
    { date: '10-பிப்-2025', name: 'ஸ்ரீல நித்யானந்த பிரபு அவதார தினம்' },
    { date: '12-பிப்-2025', name: 'ஸ்ரீ நரோத்தம தாஸ தாகூரர் அவதார தினம்' },
    { date: '17-பிப்-2025', name: 'ஸ்ரீல பக்திசித்தாந்த சரஸ்வதி தாகூரர் அவதார தினம்' },
    { date: '25-பிப்-2025', name: 'ஸ்ரீ ஈஸ்வர பூரி மறைவு தினம்' },
    { date: '28-பிப்-2025', name: 'ஸ்ரீ ஜெகன்னாத தாஸ பாபாஜி மறைவு தினம்' },
    { date: '28-பிப்-2025', name: 'ஸ்ரீ ரஸிகானந்தர் மறைவு  தினம்' },
  ]
},
{
  month: 'மார்ச்', 
  events: [
    { date: '03-மார்-2025', name: 'ஸ்ரீ புருஷோத்தம தாஸ தாகுரர் அவதார தினம்' },
    { date: '11-மார்-2025', name: 'ஸ்ரீ மாதவேந்திர பூரி மறைவு  தினம்' },
    { date: '14-மார்-2025', name: 'கௌர பூர்ணிமா: ஸ்ரீ சைதன்ய மஹாபிரபு அவதார தினம்' },
    { date: '15-மார்-2025', name: 'ஸ்ரீ ஜெகந்நாத மிஸ்ரா திருவிழா' },
    { date: '22-மார்-2025', name: 'ஸ்ரீ ஸ்ரீவாஸ பண்டிதர் அவதார தினம்' },
    { date: '26-மார்-2025', name: 'ஸ்ரீ கோவிந்த கோஷர் மறைவு  தினம்' },
  ]
},
{
  month: 'ஏப்ரல்', 
  events: [
    { date: '02-ஏப்-2025', name: 'ஸ்ரீ இராமானுஜ ஆச்சார்யர் அவதார தினம்' },
    { date: '12-ஏப்-2025', name: 'ராதா குண்டத்தின் அவதார தினம்' },
    { date: '12-ஏப்-2025', name: 'ஸ்ரீ பலராம ராஸயாத்திரை' },
    { date: '12-ஏப்-2025', name: 'ஸ்ரீ கிருஷ்ண வஸந்த ராஸயாத்திரை' },
    { date: '12-ஏப்-2025', name: 'ஸ்ரீ வம்சிவதன தாகூரர் அவதார தினம்' },
    { date: '12-ஏப்-2025', name: 'ஸ்ரீ ஷ்யாமானந்த பிரபு அவதார தினம்' },
    { date: '20-ஏப்-2025', name: 'ஸ்ரீ அபிராம தாகூரர் மறைவு தினம்' },
    { date: '23-ஏப்-2025', name: 'ஸ்ரீல விருந்தாவன தாஸ தாகூரர் மறைவு தினம்' },
    { date: '27-ஏப்-2025', name: 'ஸ்ரீ கதாதர பண்டிதர் அவதார தினம்' },
  ]
},
{
  month: 'மே', 
  events: [
    { date: '06-மே-2025', name: 'ஸ்ரீமதி சீதாதேவி அவதார தினம் (இராமரின் துணைவி)' },
    { date: '09-மே-2025', name: 'ஸ்ரீமதி ருக்மிணி த்வாதசி' },
    { date: '10-மே-2025', name: 'ஸ்ரீ ஜெயானந்த பிரபு மறைவு  தினம்' },
    { date: '11-மே-2025', name: 'ஸ்ரீ நரசிம்ம தேவர் அவதார தினம்' },
    { date: '12-மே-2025', name: 'ஸ்ரீ பரமேஷ்வர தாஸ தாகுரர் மறைவு  தினம்' },
    { date: '12-மே-2025', name: 'ஸ்ரீ ராதாரமணர் அவதார தினம்' },
    { date: '12-மே-2025', name: 'ஸ்ரீ மாதவேந்திர பூரி அவதார தினம்' },
    { date: '12-மே-2025', name: 'ஸ்ரீ ஸ்ரீநிவாஸ ஆச்சார்யர் அவதார தினம்' },
    { date: '17-மே-2025', name: 'ஸ்ரீ ராமானந்தராயர் மறைவு தினம்' },
    { date: '24-மே-2025', name: 'ஸ்ரீல விருந்தாவன தாஸ தாகூரர் அவதார தினம்' },
  ]
},
{
  month: 'ஜூன்', 
  events: [
    { date: '05-ஜூன்-2025', name: 'ஸ்ரீ பாலதேவ வித்யாபூஷணர் மறைவு தினம்' },
    { date: '05-ஜூன்-2025', name: 'ஸ்ரீமதி கங்காமாதா கோஸ்வாமினி அவதார தினம்' },
    { date: '11-ஜூன்-2025', name: 'ஸ்ரீ முகுந்த தாஸர் மறைவு  தினம்' },
    { date: '11-ஜூன்-2025', name: 'ஸ்ரீ ஸ்ரீதர பண்டிதர் மறைவு தினம்' },
    { date: '12-ஜூன்-2025', name: 'ஸ்ரீ ஷ்யாமானந்த பிரபு மறைவு தினம்' },
    { date: '16-ஜூன்-2025', name: 'ஸ்ரீ வக்ரேஸ்வர பண்டிதர் அவதார தினம்' },
    { date: '21-ஜூன்-2025', name: 'ஸ்ரீ ஸ்ரீவாஸ பண்டிதர் மறைவு தினம்' },
    { date: '25-ஜூன்-2025', name: 'ஸ்ரீ பக்திவினோத தாகூரர் மறைவு தினம்' },
    { date: '25-ஜூன்-2025', name: 'ஸ்ரீ கதாதர பண்டிதர் மறைவு தினம்' },
    { date: '27-ஜூன்-2025', name: 'ஸ்ரீ ஸ்வரூப தாமோதர கோஸ்வாமி மறைவு தினம்' },
    { date: '27-ஜூன்-2025', name: 'ஸ்ரீ சிவானந்த சேனர் மறைவு தினம்' },
  ]
},
{
  month: 'ஜூலை', 
  events: [
    { date: '01-ஜூலை-2025', name: 'ஸ்ரீ வக்ரேஸ்வர பண்டிதர் மறைவு தினம்' },
    { date: '10-ஜூலை-2025', name: 'குரு பூர்ணிமா' },
    { date: '15-ஜூலை-2025', name: 'ஸ்ரீ கோபால பட்ட கோஸ்வாமி மறைவு  தினம்' },
    { date: '18-ஜூலை-2025', name: 'ஸ்ரீ லோகநாத கோஸ்வாமி மறைவு தினம்' },
    { date: '28-ஜூலை-2025', name: 'ஸ்ரீ ரகுநந்தன தாகூரர் மறைவு தினம்' },
    { date: '28-ஜூலை-2025', name: 'ஸ்ரீ வம்சிதாஸ பாபாஜி மஹராஜர் மறைவு தினம்' },
  ]
},
{
  month: 'ஆகஸ்ட்', 
  events: [
    { date: '06-ஆக-2025', name: 'ஸ்ரீல ரூப கோஸ்வாமி மறைவு தினம்' },
    { date: '06-ஆக-2025', name: 'ஸ்ரீ கௌரிதாஸ பண்டிதர் மறைவு தினம்' },
    { date: '09-ஆக-2025', name: 'ஸ்ரீ பலராமரின் அவதார தினம்' },
    { date: '09-ஆக-2025', name: 'சாதுர்மாஸ்யாவின் இரண்டாம் மாதத்தின் தொடக்கம்' },
    { date: '16-ஆக-2025', name: 'ஸ்ரீ கிருஷ்ண ஜென்மாஷ்டமி' },
    { date: '17-ஆக-2025', name: 'ஸ்ரீல பிரபுபாதர் அவதார தினம்' },
    { date: '28-ஆக-2025', name: 'ஸ்ரீமதி சீதா தாகுராணி அவதார தினம் (ஸ்ரீ அத்வைதரின் துணைவி)' },
    { date: '31-ஆக-2025', name: 'ராதாஷ்டமி : ஸ்ரீமதி ராதாராணியின் அவதார தினம்' },
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
 