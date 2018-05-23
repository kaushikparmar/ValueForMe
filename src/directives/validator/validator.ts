// Angular Library Imports
import {Directive, Input } from '@angular/core';
import { Validator, AbstractControl, NG_VALIDATORS } from '@angular/forms';


/**
 * Max Length validator for confirm password and email
 */
@Directive({
  selector: '[maxLen]',
  providers: [{
      provide: NG_VALIDATORS,
      useExisting: MaxLen,
      multi: true
  }]
})
export class MaxLen implements Validator {
  constructor() {
  }

  @Input() maxLen: any;

  validate(control: AbstractControl): {[key: string]: any}|null {

      if (this.maxLen !== undefined && control.value !== undefined && control.value !== null && control.value.length !== undefined && parseInt(this.maxLen) < control.value.length) {
          return {'maxLength': true};
      }

      return null;
  }
}


/**
* Min Length validator for confirm password and email
*/
@Directive({
  selector: '[minLen]',
  providers: [{
      provide: NG_VALIDATORS,
      useExisting: MinLen,
      multi: true
  }]
})
export class MinLen implements Validator {
  constructor() {
  }

  @Input() minLen: any;

  validate(control: AbstractControl): {[key: string]: any}|null {

      if (this.minLen !== undefined && control.value !== undefined && control.value !== null && control.value.length !== undefined && parseInt(this.minLen) > control.value.length) {
          return {'minLength': true};
      }
      return null;
  }
}