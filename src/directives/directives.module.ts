import { NgModule } from '@angular/core';
import { MaxLen } from './validator/validator';
import { MinLen } from './validator/validator';
@NgModule({
	declarations: [MaxLen,MinLen],
	imports: [],
	exports: [MaxLen,MinLen]
})
export class DirectivesModule {}
