import { Component,OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import {  Observable } from 'rxjs';
import { MatAutocomplete } from '@angular/material/autocomplete'
import { map, startWith } from 'rxjs/operators'
import { ngxCsv } from "ngx-csv/ngx-csv";
import { RouterModule } from '@angular/router';
import { StationlistService } from 'src/app/stationlist.service';

@Component({
  selector: 'app-tables-widget14',
  templateUrl: './tables-widget14.component.html',
  styleUrls: ['./tables-widget14.component.scss']
})
export class TablesWidget14Component   {
  data : any;
array: any;
  WindSpeed1min: any;
  // array: { station: string; wind1min: number; wind2min: number; windmax: number; windspeed1: number; windspeed3: number; windspeedmax: number; pressinsta: number; press1: number; press3: number; press10: number; }[];


  constructor(private stationservices: StationlistService){}

  ngOnInit(){
    // this.stationservices.getDashboard().subscribe((result)=>{
    //   console.warn("result" ,result)
    //   this.data=result
    // })
    // this.array = this._stationlistService.array();
    this.poststation();
  }
  poststation() {
    this.stationservices.postDashboard('').subscribe((res) => {
      var tempData: any = [];

      tempData = res;
      this.data = tempData.result;
      console.log(this.data);

      if (!!this.data || this.data.length != 0) {
        this.data.forEach((currentValue: any, index: any) => {
          if (!!currentValue.Wind_Speed_1_min) {
            this.WindSpeed1min.push(currentValue.Wind_Speed_1_min);
          }
        });
      }
    
    });
  }

  // onClick(stationId:any){
  //   console.log('');
  //   this.router.navigate(['/stations',stationId])
  // }

  // constructor(
  //   private router: Router
  // ){}


    // fileDownload(){
    //   var abcd = {
    //     fieldSeparator: ',',
    //     quoteStrings: '"',
    //     decimalseparator:'.',
    //     showLabels: true,
    //     showTitle: true,
    //     title:'Stations Data',
    //     useBom: true,

    //     headers: ["Station","Wind Dir 1 min","Wind Dir 2 min","Wind Dir Max","Wind Speed 1 min","Wind Speed 3 min","Wind Speed Max","Pressure Insta","Pressure 1 min","Pressure 3 min","Pressure 10 min"]
    //   };
    //   new ngxCsv(this.array,"Stations Data", abcd);

    // }

    searchText = '';
  }



















