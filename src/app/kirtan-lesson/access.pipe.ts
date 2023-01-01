import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'access'
})
export class AccessPipe implements PipeTransform {
  constructor(){};
 accessTypeId = 1;
 isReadable! : boolean;
  transform(accessTypeId: any): any {
    if(this.accessTypeId == 1){
      this.isReadable = true;
    } else {
      this.isReadable = false;
    }
    return accessTypeId;
  }

}
