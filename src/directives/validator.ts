// Angular Library Imports
import { Directive, Input } from '@angular/core';
import { Validator, AbstractControl, NG_VALIDATORS } from '@angular/forms';


/**
 * Pattern validator for confirm password and email
 */
@Directive({
    selector: '[patternValidate]',
    providers: [{
        provide: NG_VALIDATORS,
        useExisting: PatternValidate,
        multi: true
    }]
})
export class PatternValidate implements Validator {

    private patterns: any = {
        "firstname": "^[a-zA-Z'.,\\s]+(^.)?[\\s]*$",
        "lastname": "^[a-zA-Z'.,\\s]+(^.)?[\\s]*$",
        "username": "^[a-zA-Z0-9._-]*$",
        "password": "^(?=.*\\d)(?=.*[@#$%^&+=!*])(?=.*[a-z])(?=.*[A-Z]).{8,}$",
        "zipcode": "^[0-9]*$",
        "memberid": "^[0-9]*$",
        "mobile": "^([0-9]){10}$",
        "email": "^\\w+([-+.']\\w+)*@\\w+([-.]\\w+)*\\.\\w+([-.]\\w+)*$",
        "pan": "^([a-zA-Z]){5}([0-9]){4}([a-zA-Z]){1}?$"
    }
    
    @Input() patternValidate: any;

    constructor() {
    }

    validate(control: AbstractControl): {[key: string]: any}|null {
        const patternToCompare = new RegExp(this.patterns[this.patternValidate], "g");
        let isValidPattern;
        if (this.patternValidate !== undefined && this.patternValidate !== null && this.patternValidate !== '' && control.value) {
            isValidPattern = patternToCompare.test(control.value);
        }
        if (isValidPattern !== undefined && isValidPattern === false) {
            return {'invalidPattern': true};
        }
        return null;
    }
}


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