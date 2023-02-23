
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { StationsComponent } from './stations.component';
import { WidgetsModule } from '../../_metronic/partials';

import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatNativeDateModule } from '@angular/material/core';
@NgModule({
  declarations: [StationsComponent],
  imports: [
    CommonModule, WidgetsModule, FormsModule,ReactiveFormsModule ,MatDatepickerModule ,MatFormFieldModule, MatNativeDateModule ,
 

    RouterModule.forChild([
      {
        path: '',
        component: StationsComponent,
      },
    ]),


  ],
})
export class StationsModule {

}
