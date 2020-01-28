import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { materialModules } from './material-modules';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FontAwesomeModule, FaIconComponent } from '@fortawesome/angular-fontawesome';

@NgModule({
  declarations: [],
  imports: [],
  exports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    FontAwesomeModule,
    ...[materialModules]
  ],
  entryComponents: [FaIconComponent]
})
export class SharedModule {}
