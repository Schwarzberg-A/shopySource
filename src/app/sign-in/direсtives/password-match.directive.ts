import { Directive } from '@angular/core';
import { FormGroup, ValidationErrors, Validator, NG_VALIDATORS } from '@angular/forms';
import { PasswordMatchValidator } from '../password-match.validator';

@Directive({
  selector: '[appPasswordMatch]',
  providers: [
    {
      provide: NG_VALIDATORS,
      useExisting: PasswordMatchDirective,
      multi: true
    }
  ]
})

export class PasswordMatchDirective implements Validator {

  validate(formGroup: FormGroup): null | ValidationErrors {
    console.log(formGroup)

    return PasswordMatchValidator(formGroup)
  }

  constructor() { }

}
