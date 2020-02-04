import {
  // MatAutocompleteModule,
  // MatBadgeModule,
  // MatBottomSheetModule,
  MatButtonModule,
  // MatButtonToggleModule,
  MatCardModule,
  // MatCheckboxModule,
  // MatChipsModule,
  // MatDatepickerModule,
  // MatDialogModule,
  // MatDividerModule,
  // MatExpansionModule,
  MatFormFieldModule,
  MatGridListModule,
  MatIconModule,
  MatInputModule,
  MatListModule,
  // MatMenuModule,
  // MatNativeDateModule,
  // MatPaginatorModule,
  // MatProgressBarModule,
  // MatProgressSpinnerModule,
  // MatRadioModule,
  // MatRippleModule,
  MatSelectModule,
  MatSidenavModule,
  // MatSliderModule,
  // MatSlideToggleModule,
  MatSnackBarModule,
  // MatSortModule,
  // MatStepperModule,
  // MatTableModule,
  // MatTabsModule,
  MatToolbarModule
  // MatTooltipModule,
  // MatTreeModule,
} from '@angular/material';

// Provides functionality for auto-scaling input fields; useful in forms
// See: https://material.angular.io/cdk/text-field/overview
import { TextFieldModule } from '@angular/cdk/text-field';

export const materialModules = [
  //
  MatButtonModule,
  MatCardModule,
  MatGridListModule,
  MatFormFieldModule,
  MatIconModule,
  MatInputModule,
  MatListModule,
  MatSelectModule,
  MatSidenavModule,
  MatSnackBarModule,
  MatToolbarModule,
  //
  TextFieldModule
];
