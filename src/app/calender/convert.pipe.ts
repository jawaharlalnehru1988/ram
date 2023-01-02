import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'convert'
})
export class ConvertPipe implements PipeTransform {
  value1: string | undefined;

  transform(value: any): any {
    console.log("value: ", value);
    if (value.includes('Sunday')){
      console.log("value.includes('Monday')", value.includes('Monday'));
      return value.replace('Sunday', "ஞாயிற்றுக்கிழமை");
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
    } else if (value.includes('Saturday')){
      return value.replace('Saturday', "சனிக்கிழமை");
    } else {
      return undefined;
    }
    
    
  }

}
