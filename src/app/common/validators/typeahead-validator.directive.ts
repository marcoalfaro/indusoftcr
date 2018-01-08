import { Directive } from '@angular/core';
import { NG_VALIDATORS, FormControl, Validator, ValidationErrors } from '@angular/forms';


@Directive({
 selector: '[validateSelection]',
 providers: [{ provide: NG_VALIDATORS, useExisting: TypeAheadValidatorDirective, multi: true }]
})
export class TypeAheadValidatorDirective implements Validator {

 validate(c: FormControl): ValidationErrors {

   const isValid = typeof c.value === 'object' ? true : false;
   const message = {
     'selected': {
       'message': 'Debe elegir una de las opciones'
     }
   };
   return isValid ? null : message;
 }
}
