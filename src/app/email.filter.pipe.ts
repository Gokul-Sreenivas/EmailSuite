import { Pipe, PipeTransform, ɵConsole } from '@angular/core';

@Pipe({
  name: 'emailPipeFilter',
})
export class emailPipeFilter implements PipeTransform {
  transform(items: Array<any>, formEmail: string): Array<any> {
    if (formEmail) {
      let found = [];
      items.forEach((item) => {
        for (let key in item) {
          if (typeof item[key] == 'string') {
            if (
              item[key].toLowerCase().indexOf(formEmail.toLowerCase()) !== -1
            ) {
              console.log('found', item[key]);
              found.push(item);
            }
          }
        }
      });
      return found;
    } else {
      return items;
    }

  }
}
