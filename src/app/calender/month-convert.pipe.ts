import { HttpClient } from '@angular/common/http';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'monthConvert'
})
export class MonthConvertPipe implements PipeTransform {
  months: any;
  engMonths: any;
  tamilMonths: any;
constructor(private httpClient: HttpClient){
  this.httpClient.get('https://jagannathadasa16.github.io/bookApi/month.json').subscribe(res=>{
  this.months = res;
  // console.log("this.months", this.months.map((item:any) => item.emonth));
 this.engMonths = this.months.map((item:any) => item.emonth)
 this.tamilMonths = this.months.map((item:any) => item.tmonth)
  // console.log(this.engMonths, this.tamilMonths);
  
  });
}
  transform(value: any, ...args: any[]): any {
// console.log(value);

if(value.includes("January")){
  return value.replace(/January/i, 'ஜனவரி');
} else if (value.includes("February")){
return value.replace(/February/i, 'பிப்ரவரி');
} else if (value.includes("March")){
return value.replace(/March/i, 'மார்ச்');
} else if (value.includes("April")){
return value.replace(/April/i, 'ஏப்ரல்');
} else if (value.includes("May")){
return value.replace(/May/i, 'மே');
} else if (value.includes("June")){
return value.replace(/June/i, 'ஜூன்');
} else if (value.includes("july")){
return value.replace(/july/i, 'ஜூலை');
} else if (value.includes("August")){
return value.replace(/August/i, 'ஆகஸ்ட்');
} else if (value.includes("September")){
return value.replace(/September/i, 'செப்டம்பர்');
} else if (value.includes("October")){
return value.replace(/October/i, 'அக்டோபர்');
} else if (value.includes("November")){
return value.replace(/November/i, 'நவம்பர்');
} else if (value.includes("December")){
return value.replace(/December/i, 'டிசம்பர்');
} 

}
}