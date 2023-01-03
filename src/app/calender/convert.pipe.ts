import { HttpClient } from '@angular/common/http';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'convert'
})
export class ConvertPipe implements PipeTransform {
  weeks: any;
  weekDay: any;
  tweekDay: any;
  tamilDay: any;
constructor(private httpClient:HttpClient){ 
 
}
  transform(value: any): any {
    // this.httpClient.get('https://sheetdb.io/api/v1/ufofhn680ebn3?sheet=week').subscribe(res=>{
    //   this.weeks = res;
    //  const weekk =  this.weeks.map((element:any) => {
    //     if(element.eweek == value){
    //       this.tamilDay = element.tweek;
    //       console.log('element.tweek', this.tamilDay);
    //       // return this.tamilDay;
          
    //       console.log("weekk", weekk)
    //       return weekk
    //     }
    //   });
    // })
    if (value.includes('Sunday') && value.includes('January')){
      console.log("value.includes('Monday')", value.includes('Monday'));
      return value.replace('Sunday', "ஞாயிற்றுக்கிழமை") + " " + value.replace('January', "ஜனவரி");
    } else if (value.includes('Monday')){
      return value.replace('Monday', "திங்கட்கிழமை");
    } else if (value.includes('Tuesday')) {
      return value.replace('Tuesday', "செவ்வாய் கிழமை");
    } else if (value.includes('Wednesday')) {
      return value.replace('Wednesday', "புதன் கிழமை");
    } else if (value.includes('Thursday')) {
      return value.replace('Thursday', "வியாழக் கிழமை");
    } else if (value.includes('Friday')){
      return value.replace('Friday', "வெள்ளிக் கிழமை");
    } else {
      return value.replace('Saturday', "சனிக்கிழமை");
    } 
    
    
  }

}
