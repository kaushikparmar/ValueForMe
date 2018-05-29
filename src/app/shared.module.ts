import { NgModule } from '@angular/core';
import { MaxLen, MinLen, PatternValidate } from './../directives/validator';

@NgModule({
    imports: [],
    declarations: [ MaxLen, MinLen, PatternValidate ],
    exports: [ MaxLen, MinLen, PatternValidate ]
})

export class SharedModule {
    constructor() {}
}