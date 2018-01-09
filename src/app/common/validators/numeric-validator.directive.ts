import { Directive } from '@angular/core';
import { NG_VALIDATORS, FormControl, Validator, ValidationErrors } from '@angular/forms';


@Directive({
  selector: '[numericValidation]',
  providers: [{ provide: NG_VALIDATORS, useExisting: NumericValidatorDirective, multi: true }]
})
export class NumericValidatorDirective implements Validator {

  validate(c: FormControl): ValidationErrors {
    const numValue = Number(c.value);
    const isValid = !isNaN(numValue);
    const message = {
      'numeric': {
        'message': 'Este campo debe ser numérico'
      }
    };
    return isValid ? null : message;
  }
}
