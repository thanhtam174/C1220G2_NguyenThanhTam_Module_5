import { Pipe, PipeTransform } from '@angular/core';
import {Customer} from '../model/customer';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(customerList: Customer[], searchValue: string ): Customer[] {
    if (!customerList || !searchValue){
      return customerList;
    }
    return customerList.filter(customer => customer.name.toLocaleLowerCase().includes(searchValue.toLocaleLowerCase()));
  }

}
