import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { materialModules } from './material-modules';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FontAwesomeModule, FaIconComponent } from '@fortawesome/angular-fontawesome';

import { FontAwesomeIconsModule } from './font-awesome-icons.module';

@NgModule({
  imports: [],
  exports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    // FontAwesomeModule,
    FontAwesomeIconsModule,
    ...[materialModules]
  ]
  // entryComponents: [FaIconComponent]
})
export class SharedModule {}
