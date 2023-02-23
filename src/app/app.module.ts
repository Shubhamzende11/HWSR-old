import { UserInnerComponent } from './_metronic/partials/layout/extras/dropdown-inner/user-inner/user-inner.component';
import { NgModule, APP_INITIALIZER } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { ClipboardModule } from 'ngx-clipboard';
import { TranslateModule } from '@ngx-translate/core';
import { InlineSVGModule } from 'ng-inline-svg-2';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthService } from './modules/auth/services/auth.service';
import { environment } from 'src/environments/environment';
// #fake-start#
import { FakeAPIService } from './_fake/fake-api.service';

import { NgApexchartsModule } from 'ng-apexcharts';
import { APP_BASE_HREF } from '@angular/common';

import { FormsModule } from '@angular/forms';
import {MatDialogModule} from '@angular/material/dialog';
import { StationlistService } from './stationlist.service';
import { ReactiveFormsModule } from '@angular/forms';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatNativeDateModule } from '@angular/material/core';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { HashLocationStrategy, LocationStrategy} from '@angular/common';
// import { ActiveinactivestationsComponent } from './pages/activeinactivestations/activeinactivestations.component';


// import { StationsComponent } from './pages/stations/stations.component';



// #fake-end#

function appInitializer(authService: AuthService) {
  return () => {
    return new Promise((resolve) => {
      //@ts-ignore
      authService.getUserByToken().subscribe().add(resolve);
    });
  };
}

@NgModule({
  declarations: [AppComponent,],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    TranslateModule.forRoot(),
    HttpClientModule,
    ClipboardModule,
    NgApexchartsModule,
    FormsModule,
    MatDialogModule,
    ReactiveFormsModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatNativeDateModule,
    MatProgressSpinnerModule,
  

  


    // #fake-start#
    environment.isMockEnabled
      ? HttpClientInMemoryWebApiModule.forRoot(FakeAPIService, {
          passThruUnknownUrl: true,
          dataEncapsulation: false,
        })
      : [],
    // #fake-end#
    AppRoutingModule,
    InlineSVGModule.forRoot(),
    NgbModule,
  ],
  // providers: [ 
    // {
    //   provide: APP_INITIALIZER,
    //   useFactory: appInitializer,
    //   multi: true,
    //   deps: [AuthService],
    // },
    
    providers:[{provide: LocationStrategy, useClass: HashLocationStrategy}],
    // {
    //   provide: APP_BASE_HREF,
    //   useValue: '/Hwsrweb'
    // }
  // ],
  bootstrap: [AppComponent],
})
export class AppModule {}
