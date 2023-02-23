// import { NgModule } from '@angular/core';
// import { CommonModule } from '@angular/common';



// @NgModule({
//   declarations: [],
//   imports: [
//     CommonModule
//   ]
// })
// export class ActiveinactivestationsModule { }


import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ActiveinactivestationsComponent } from './activeinactivestations.component';
import { WidgetsModule } from '../../_metronic/partials';


@NgModule({
  declarations: [ActiveinactivestationsComponent],
  imports: [
    CommonModule, WidgetsModule,

    RouterModule.forChild([
      {
        path: '',
        component: ActiveinactivestationsComponent,
      },
    ]),


  ],
})
export class ActiveinactivestationsModule {

}
