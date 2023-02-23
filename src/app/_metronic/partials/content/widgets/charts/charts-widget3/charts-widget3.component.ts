import { ViewChild,Component, OnInit, Input, Output, EventEmitter, OnChanges, ChangeDetectorRef, SimpleChanges} from '@angular/core';
import { getCSSVariableValue } from '../../../../../kt/_utils';
import { HttpClient } from '@angular/common/http'
import { color } from 'd3';

import {
  ChartComponent,
  ApexAxisChartSeries,
  ApexTitleSubtitle,
  ApexDataLabels,
  ApexFill,
  ApexYAxis,
  ApexXAxis,
  ApexTooltip,
  ApexMarkers,
  ApexAnnotations,
  ApexStroke,
  ApexChart
} from "ng-apexcharts";

export type ChartOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  dataLabels: ApexDataLabels;
  markers: ApexMarkers;
  title: ApexTitleSubtitle;
  fill: ApexFill;
  yaxis: ApexYAxis;
  xaxis: ApexXAxis;
  tooltip: ApexTooltip;
  stroke: ApexStroke;
  annotations: ApexAnnotations;
  colors: any;
  toolbar: any;
};
import { StationlistService } from 'src/app/stationlist.service';


@Component({
  selector: 'app-charts-widget3',
  templateUrl: './charts-widget3.component.html',
})
// OnChanges 
export class ChartsWidget3Component implements OnInit{
  chartOptions: any = {};
  results: any;
  // @Input() windSpeedOneData: any;
  // @Input() windSpeedThreeData: any;
  @Input() winddirectionone: any =[];
  @Input() winddirectionthree:any=[];
  @Output() public childEvent = new EventEmitter();
  chartData: any = [];
  @ViewChild("charts") chart : ChartComponent;

  yearToggle: boolean = false;
  monthToggle: boolean = false;
  weekToggle: boolean = false;
  Time: any[] = [];
  // private http: HttpClient, private cd: ChangeDetectorRef
  constructor(private stationservices: StationlistService  ) { }
  // ngOnChanges(changes: SimpleChanges): void {
  //   // this.chartOptions = getChartOptions(350, this.windSpeedOneData , this.windSpeedThreeData)
  // }
  isLoading = true;
  ngOnInit(): void {
   
    // setInterval(()=> {
      // this.postwinddirectioncharts();
    // },10000)
       setInterval(()=> {
      this.postTime();
    },10000)

 
    // this.postwinddirectioncharts();
    // this.displayWeekData();
    // this.displayMonthData();
    // this.displayYearData();
     
    }
    postTime(){
      this.stationservices.postCharts("43377KYK").subscribe((result: any) => {
        this.isLoading = false;
        var tempData: any = [];
       var time:any = [];
      
     
        tempData = result;
        this.chartData =tempData.result;
        console.log(this.chartData);
    
        if (this.chartData || this.chartData.length != 0) {
          this.chartData.forEach((currentValue: any) => {
            if (currentValue.StationId==="43377KYK") {
              time.push(currentValue.Time)
            }
          });
         
        
          console.log(time)
          this.Time = [...time];
          this.postwinddirectioncharts();
          //  this.chartOptions = getChartOptions(350,data,data1)
        }
        
      }
      );
    }
    postwinddirectioncharts(){
      this.stationservices.postCharts("43377KYK").subscribe((result: any) => {
       var tempData: any = [];
       var data:any = [];
       var data1:any=[];
      
     
        tempData = result;
        this.chartData =tempData.result;
        console.log(this.chartData);
    
        if (this.chartData || this.chartData.length != 0) {
          this.chartData.forEach((currentValue: any) => {
            if (currentValue.StationId==="43377KYK") {
              data.push(currentValue?.['WD-1min'])
            }
            if (currentValue.StationId==="43377KYK") {
              data1.push(currentValue?.['WD-3min'])
            }
           
    
          });
         
         
          console.log(data)
          console.log(data1)
         
           this.chartOptions = getChartOptions(350,data,data1,this.Time)
        }
        
      }
      );
    }
   
    displayWeekData(){
      this.stationservices.postCharts("43377KYK").subscribe((result: any) => {
        var weekdata=[];
       let weekData1 : any =[] ;
       let weekData2 : any =[];
       this.yearToggle = false;
       this.monthToggle = false;
       this.weekToggle = true;
  
       weekdata = result;
      this.chartData =weekdata.result;
      console.log(this.chartData);
  
      if (this.chartData || this.chartData.length != 0) {
        this.chartData.forEach((currentValue: any, index: any) => {
          if (currentValue.StationId==="43377KYK") {
            weekData1.push(currentValue?.['WD-1min'])
          }
          if (currentValue.StationId==="43377KYK") {
            weekData2.push(currentValue?.['WD-3min'])
          }
  
        });
       
      
        console.log(weekData1)
        console.log(weekData2)
         this.chartOptions = getChartOptions(350,weekData1,weekData2,this.Time)
      }
      
    }
    );
    }
    displayMonthData(){
    
      this.stationservices.postCharts("43377KYK").subscribe((result: any) => {
      var monthdata=[];
     let monthData1 : any =[] ;
     let monthData2 : any =[];
     this.yearToggle = false;
     this.monthToggle = true;
     this.weekToggle = false;

     monthdata = result;
    this.chartData =monthdata.result;
    console.log(this.chartData);

    if (this.chartData || this.chartData.length != 0) {
      this.chartData.forEach((currentValue: any, index: any) => {
        if (currentValue.StationId==="43377KYK") {
          monthData1.push(currentValue?.['WD-1min'])
        }
        if (currentValue.StationId==="43377KYK") {
          monthData2.push(currentValue?.['WD-3min'])
        }

      });
     
    
      console.log(monthData1)
      console.log(monthData2)
       this.chartOptions = getChartOptions(350,monthData1,monthData2,this.Time)
    }
    
  }
  );
  }
     

  displayYearData(){
    this.stationservices.postCharts("43377KYK").subscribe((result: any) => {
    var yeardata=[];
   let yearData1 : any =[] ;
   let yearData2 : any =[];
   this.yearToggle = true;
   this.monthToggle = false;
   this.weekToggle = false;

   yeardata = result;
  this.chartData =yeardata.result;
  console.log(this.chartData);

  if (this.chartData || this.chartData.length != 0) {
    this.chartData.forEach((currentValue: any, index: any) => {
      if (currentValue.StationId==="43377KYK") {
        yearData1.push(currentValue?.['WD-1min'])
      }
      if (currentValue.StationId==="43377KYK") {
        yearData2.push(currentValue?.['WD-3min'])
      }

    });
   
  
    console.log(yearData1)
    console.log(yearData2)
     this.chartOptions = getChartOptions(350,yearData1,yearData2,this.Time)
  }
  
}
);
}

 
 
  }







function getChartOptions(_height: number ,winddirectionone: any, winddirectionthree: any, time?: any) {

  const labelColor = getCSSVariableValue('--bs-gray-500');
  const borderColor = getCSSVariableValue('--bs-gray-200');
  const baseColor = getCSSVariableValue('--bs-info');
  const lightColor = getCSSVariableValue('--bs-light-info');

  return {
    series: [
      {
        name: 'Wind Direction within 1 min',
        data: winddirectionone
      },
      {
        name: 'Wind Direction within 3 min',
        data: winddirectionthree
      }
    ],
    // legend : {
    //   position : 'top',
    //   horizontalAlign : 'left',
    //   showForSingleSeries: true,
    //   onItemClick : {
    //     toggleDataSeries :true
    //   }

    // },
    chart: {
      height: 200,
      type: "area"
    },
    dataLabels: {
      enabled: false
    },
    stroke: {
      curve: "smooth"
    },
    
    zoom: {
      // type: "x",
      // enabled: true,
      // autoScaleYaxis: true
      enabled: true,
    },
    xaxis: {
      //  tickAmount: 2,
      categories: time || [
        0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30
      ]
      // tickAmount: 8,
      // type: 'datetime',
      // categories: ["2018-09-19T00:01:00.000Z",
      //  "2018-09-19T00:02:00.000Z",
      //   "2018-09-19T00:03:00.000Z",
      //    "2018-09-19T00:04:00.000Z",
      //    "2018-09-19T00:05:00.000Z",
      //     "2018-09-19T00:06:00.000Z",
      //      "2018-09-19T00:07:00.000Z",
      //      "2018-09-19T00:08:00.000Z",
      //      "2018-09-19T00:09:00.000Z",
      //       "2018-09-19T00:10:00.000Z",
      //        "2018-09-19T00:11:00.000Z",
      //        "2018-09-19T00:12:00.000Z",
      //         "2018-09-19T00:13:00.000Z",
      //          "2018-09-19T00:14:00.000Z",
      //          "2018-09-19T00:15:00.000Z",
      //          "2018-09-19T00:16:00.000Z",
      //           "2018-09-19T00:17:00.000Z",
      //            "2018-09-19T00:18:00.000Z",
      //            "2018-09-19T00:19:00.000Z",
      //             "2018-09-19T00:20:00.000Z",
      //              "2018-09-19T00:21:00.000Z",
      //              "2018-09-19T00:22:00.000Z",
      //              "2018-09-19T00:23:00.000Z",
      //               "2018-09-19T00:24:00.000Z",
      //                "2018-09-19T00:25:00.000Z",
      //                "2018-09-19T00:26:00.000Z",
      //                 "2018-09-19T00:27:00.000Z",
      //                  "2018-09-19T00:28:00.000Z",
      //                  "2018-09-19T00:29:00.000Z",
      //                  "2018-09-19T00:30:00.000Z"]
   
    },
    
    // grid: {
    //   padding: {
    //     left: 30, // or whatever value that works
    //     right: 30 // or whatever value that works
    //   }
    // },
    tooltip: {
      // style: {
      //   fontSize: '12px',

      // },
      x: {
        format: 'dd/MM/yy  HH:mm'
      },
      y: {
        formatter: function (val: number) {
          return  + val +" "+ 'deg';
        },
      },
    },
  };
}
