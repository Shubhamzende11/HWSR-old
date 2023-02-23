import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

import { StationlistService } from 'src/app/stationlist.service';
import { ngxCsv } from 'ngx-csv/ngx-csv';

// import { PopUpComponent } from './pop-up/pop-up.component';
@Component({
  selector: 'app-activeinactivestations',
  templateUrl: './activeinactivestations.component.html',
  styleUrls: ['./activeinactivestations.component.scss']
})
export class ActiveinactivestationsComponent implements OnInit {
  

  activeinactivedata: any = [];
  activedata: any;

  listofActiveData: any =[]
  listOfInactiveData: any[] = [];
  
  listinactive:any = []
  listdata: any;

  


  constructor(private stationservices: StationlistService) { }

  ngOnInit(): void {

    // setTimeout(function(){
    //   location.reload();
    // },5000);

    this.postactiveinactive();
    this.postactiveinactivelist();

    // this.postactivelist();
    
  }
    postactiveinactive() {
    this.stationservices.postactiveinactivestations('').subscribe((res) => {
      var tempData: any = [];

      tempData = res;
      this.activeinactivedata = tempData.result;
      console.log(this.activeinactivedata);

      if (this.activeinactivedata || this.activeinactivedata.length > 0) {
        this.activedata = this.activeinactivedata[0];
      }
      
    });
  }

  //function of active inactive list
  postactiveinactivelist() {
    this.stationservices.postactiveinactivestationslist('').subscribe((res:any) => {
      // var tempData1: any = [];
      
      // tempData1 = [...res.result];
      // debugger;
      // console.log('sdasdfasdfasdfasd',[...res.result.active_station])
      // debugger;
      this.listofActiveData = [...res.result.active_station];
      this.listOfInactiveData = [...res.result.inactive_station]
      console.log('string',this.listofActiveData )
     
     
    });
  }

  // postactivelist() {
  //   this.stationservices.postactiveinactivestationslist('').subscribe((res:any) => {
  //     this.listinactive = [...res.result.inactive_station];
  //     console.log('string',this.listinactive )
  //   });
  // }
}
