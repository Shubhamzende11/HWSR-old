import { switchMap } from 'rxjs/operators';
import {
  ChangeDetectorRef,
  Component,
  EventEmitter,
  Input,
  OnInit,
  AfterViewInit,
  Output,
  OnDestroy,
} from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

import { StationlistService } from 'src/app/stationlist.service';
import { ngxCsv } from 'ngx-csv/ngx-csv';

import { PopUpComponent } from './pop-up/pop-up.component';
import * as Highcharts from 'highcharts/highmaps';

import country from 'src/assets/country/india.json';
import states from 'src/assets/country/stateanddistrict.json';
import { reduce } from 'd3';
import { Subscription, timer } from 'rxjs';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit, OnDestroy {
  subscription: Subscription;

  stationData=[
    {
      id:'43348ADM',
      name: 'ADIRAMPATNAM',
      lat: 10.3413,
      lon: 79.3796,
    },
    {
      id:'42895BLS',
      name: 'BALASORE',
      lat: 21.4934,
      lon: 86.9135, 
    },
    {
      id:'42971BWN',
      name: 'BHUBANESHWAR',
      lat: 20.2961,
      lon: 85.8245, 
    },
    {
      id:'null',
      name: 'BHUJ',
      lat: 23.2420,
      lon:69.6669, 
    },
    {
      id:'43105KLN',
      name: 'CALINGPATNAM',
      lat: 18.3387,
      lon:84.1211, 
    },
    {
      id:'43329CDL',
      name: 'CHANDBALI',
      lat: 20.7740,
      lon: 86.7437, 
    },
    {
      id:'43278CHN',
      name: 'CHENNEAI',
      lat: 13.0827,
      lon: 80.2707,
    },
    {
      id:'43057CLB',
      name: 'COLABA',
      lat: 18.9067,
      lon: 72.8147,
    },
    {
      id:'42901DGA',
      name: 'DIGHA',
      lat: 21.6222,
      lon: 87.5066,
    },
    {
      id:'42731DWK',
      name: 'DWARKA',
      lat: 19.0705,
      lon: 72.8331,
    },
    {
      id:'43192PJM',
      name: 'Panji',
      lat: 15.496777,
      lon: 73.827827,
    },
    {
      id:'43049GOP',
      name: 'GOPALPUR',
      lat: 19.2647,
      lon: 84.8620,
    },
    {
      id:'42806HLD',
      name: 'HALDIA',
      lat: 22.0627,
      lon: 88.0833,
    },
    {
      id:'43189KND',
      name: 'KAKINADA',
      lat: 16.9891,
      lon: 82.2475,
    },
    {
      id:'null',
      name: 'Visakhapatnam ',
      lat: 17.6868,
      lon: 83.2185,
    },
  { 
      id:'42909VRL',
      name: 'Veraval ',
      lat: 20.9159,
      lon: 70.3629,
  },
  { 
    id:'43361TON',
    name: 'Thondi ',
    lat: 9.7438,
    lon: 79.0185,
  },
  {
    id:'42816SLC',
    name: 'Salt Lake ',
    lat: 22.575148,
    lon: 88.406242,
  },
  {
    id:'null',
    name: 'Sagar Island',
    lat: 21.7269,
    lon: 88.1096,
  },
  {
    id:'43110RTN',
    name: 'Ratnagiri',
    lat: 16.9902,
    lon: 73.3120,
  },
  {
    id:'43053PRI',
    name: 'Puri',
    lat: 19.8135,
    lon: 85.8312,
  },
  {
    id:'null',
    name: 'Port Blair',
    lat: 11.6234,
    lon: 92.7265,
  },
  {
    id:'42976PDP',
    name: 'Paradeep',
    lat: 20.3166,
    lon: 86.6114,
  },
  {
    id:'null',
    name: 'Ongole',
    lat: 15.5057,
    lon: 80.0499,
  },
  {
    id:'null',
    name: 'Nellore',
    lat: 14.4426,
    lon: 79.9865,
  },
  {
    id: '42631NLY',
    name: 'Naliya',
    lat: 23.2609 ,
    lon: 68.8273
  },
  {
    id: '43347NPT',
    name: 'Nagapattinam',
    lat: 10.7672,
    lon: 79.8449
  },
  {
    id: 'null',
    name: 'Machilipatnam',
    lat:16.1809 ,
    lon: 81.1303 
  },
  {
    id: '43243KVL',
    name: 'Kavali',
    lat: 14.9132,
    lon:79.9930 
  },
  {
    id: '43346KKL',
    name: 'Karaikal',
    lat:10.9254 ,
    lon: 79.8380
  },
  {
    id: '43377KYK',
    name: 'Kanyakumari',
    lat: 8.0883,
    lon: 77.5385
  }];

  
  
  data: any = [];
  WindSpeed1min: any = [];
  activeinactivedata: any = [];
  activedata: any;
  windata:any;
  showtable: boolean;
  onlyActiveStation: any = [];

  show1: boolean = false;
  show2: boolean = false;
  Loading = true;
  array: any = [];
  constructor(
   
    private stationservices: StationlistService
  ) {}
  ngOnDestroy(): void {
    throw new Error('Method not implemented.');
  }
  refresh(): void {
    window.location.reload();
}

  getid(station:any){
    
    let data: any = [];
    station.forEach((element:any) => {
      this.stationData.forEach((singleStation:any) => {
        if(element.station_id === singleStation.id){
          singleStation = {...singleStation, ...element};
          data = [...data,singleStation];
        }
      })
    });
    console.log('available Statio::', data);
    this.map(data);
  }
  isLoading = true;

  ngOnInit() {
   
    // setTimeout(function(){
    //   location.reload();
    // },5000);
  

    this.stationservices.postDashboard('').subscribe((res:any)=>{
    
    
      // console.log("vikrant:", res.result);
      this.getid(res.result);
    });

    // this.poststation();
    setInterval(()=> {
      this.poststation();
    },10000)
    
  }
  

  map = (onlyActiveStation: any) => {
  
    const topology = country;
   
    const newOptions = {accessibility: {enabled: false}}
  Highcharts.setOptions(newOptions);
  
  Highcharts.mapChart({
      
    chart: {
      renderTo:'container',
      map: topology
    },
    
    credits:{
      enabled: false

    }, 

    title: {
      text: ''
    },
   plotOptions:{
    map:{
      color:'#7a94d6'
   }},
    mapNavigation: {
      enabled: true,
      buttonOptions: {
        verticalAlign: 'top'
      }
    },

    

    series: [{
      type:'map',
      name:'India',
      enableMouseTracking:false,
      data: [
        ['madhya pradesh', 0], ['uttar pradesh', 0], ['karnataka', 0],
        ['nagaland', 0], ['bihar', 0], ['lakshadweep', 0],
        ['andaman and nicobar', 0], ['assam', 0], ['west bengal', 0],
        ['puducherry', 0], ['daman and diu', 0], ['gujarat', 0],
        ['rajasthan', 0], ['dadara and nagar havelli', 0],
        ['chhattisgarh', 0], ['tamil nadu', 0], ['chandigarh', 0],
        ['punjab', 0], ['haryana', 0], ['andhra pradesh', 0],
        ['maharashtra', 0], ['himachal pradesh', 0], ['meghalaya', 0],
        ['kerala', 0], ['telangana', 0], ['mizoram', 0], ['tripura', 0],
        ['manipur', 0], ['arunanchal pradesh', 0], ['jharkhand', 0],
        ['goa', 0], ['nct of delhi', 0], ['odisha', 0],
        ['jammu and kashmir', 0], ['sikkim', 0], ['uttarakhand', 0]
        ],
        
      // name: 'Random data',
      states: {
        hover: {
          color: '#BADA55'
        }
      },
      dataLabels: {
        enabled: true,
        
        format: '{point.name}',
        
      },
      
    },
    {
      // Specify points using lat/lon
      type: 'mappoint',
      name: ' Active Stations',
      stickyTracking:false,
      color: 'blue',
      tooltip:{
       

        pointFormat:
        'ID:{point.id}<br>City:{point.name}<br>Wind Direction 1-min:{point.Wind_Dir1_min}<br>Wind Direction 3-min:{point.Wind_Dir3_min}<br>Wind Direction Max:{point.Wind_dir_max}<br>Wind Speed 1-min:{point.Wind_Speed_1_min}<br>Wind Speed 3-min:{point.Wind_speed_3_min}<br>Wind Speed Max:{point.Wind_Speed_max}<br>Pressure 1-min:{point.Pressure_1_min}<br>Pressure Insta:{point.Pressure_insta}',
      },
     
      data: onlyActiveStation
      
     
    }
  ]
  }); 

  }
   poststation() {
    this.stationservices.postDashboard('').subscribe((res) => {
      this.isLoading = false;  
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
 
  // poststation() {
  //   this.stationservices.postDashboard('').subscribe((res) => {
  //     this.isLoading = false;  
  //     var tempData: any = [];

  //     tempData = res;
  //     this.data = tempData.result;
  //     console.log(this.data);

  //     if (!!this.data || this.data.length != 0) {
  //       this.data.forEach((currentValue: any, index: any) => {
  //         if (!!currentValue.Wind_Speed_1_min) {
  //           this.WindSpeed1min.push(currentValue.Wind_Speed_1_min);
  //         }
  //       });
  //     }
    
  //   });
  // }


  // fileDownload(){
  //   var abcd = {
  //     fieldSeparator: ',',
  //     quoteStrings: '"',
  //     decimalseparator:'.',
  //     showLabels: true,
  //     showTitle: true,
  //     title:'Stations Data',
  //     useBom: true,

  //     headers: ["Station Id","Station","Wind Dir 1 min","Wind Dir 2 min","Wind Dir Max","Wind Speed 1 min","Wind Speed 3 min","Wind Speed Max","Pressure Insta","Pressure 1 min"]
  //   };
  //   new ngxCsv(this.data,"Stations Data", abcd);

  // }

  searchText = '';
}
