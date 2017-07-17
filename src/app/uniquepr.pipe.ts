import { Pipe, PipeTransform } from '@angular/core';
import * as _ from 'lodash';

@Pipe({
  name: 'uniquepr',
  pure: false
})

export class UniqueprPipe implements PipeTransform {
    transform(value: any): any{
        if(value!== undefined && value!== null){
            return _.uniqBy(value, 'codProvincia');
        }
        return value;
    }
}