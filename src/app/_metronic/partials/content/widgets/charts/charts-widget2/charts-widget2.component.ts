import { Component, OnInit } from '@angular/core';

import { ViewChild,Input, OnChanges, ChangeDetectorRef, SimpleChanges} from '@angular/core';
import { getCSSVariableValue } from '../../../../../kt/_utils';
import { StationlistService } from 'src/app/stationlist.service';
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


@Component({
  selector: 'app-charts-widget2',
  templateUrl: './charts-widget2.component.html',
  // styleUrls: ['./charts-widget10.component.scss']
})
export class ChartsWidget2Component implements OnInit{
  chartOptions: any = {};
  results: any;

  @Input() windDirectionOneData: any;
  @Input() windDirectionThreeData: any;

  chartData: any = [];
  @Input() windspeedone: any =[];
  @Input() windspeedthree:any=[];
  Time: any[] = [];
  
  @ViewChild("charts") chart : ChartComponent;

  yearToggle: boolean = false;
  monthToggle: boolean = false;
  weekToggle: boolean = false;


  constructor( private stationservices: StationlistService) { }
  // ngOnChanges(changes: SimpleChanges): void {
    // this.chartOptions = getChartOptions(350, this.windDirectionOneData, this.windDirectionThreeData)
  // }
  isLoading = true;
  ngOnInit(): void {
  

      // this.chartOptions = getChartOptions(350, this.windDirectionOneData,this.windDirectionThreeData);
      // this.cd.detectChanges();
      setInterval(()=> {
        // this.postwindspeedcharts();
        this.posttime();
      },10000)
      // this.displayWeekData();
      // this.displayMonthData();
      // this.displayYearData();
    }
    posttime(){
      this.stationservices.postCharts("43377KYK").subscribe((result: any) => {
        this.isLoading = false;
        var tempData: any = [];
       var time:any = [];
      
     
        tempData = result;
        this.chartData =tempData.result;
        console.log(this.chartData);
    
        if (this.chartData || this.chartData.length != 0) {
          this.chartData.forEach((currentValue: any, index: any) => {
            if (currentValue.StationId==="43377KYK") {
              time.push(currentValue.Time)
            }
          });
         
        
          console.log(time)
          this.Time = [...time];
          this.postwindspeedcharts();
          // this.displayWeekData();
          // this.displayMonthData();
          // this.displayYearData();
          
          //  this.chartOptions = getChartOptions(350,data,data1)
        }
        
      }
      );
    }



    postwindspeedcharts(){
      this.stationservices.postCharts("43377KYK").subscribe((result: any) => {
        var tempData: any = [];
       var data:any = [];
       var data1:any=[];
      //  var time:any = [];
        tempData = result;
        this.chartData =tempData.result;
        console.log(this.chartData);
       
        
    
        if (this.chartData || this.chartData.length != 0) {
          this.chartData.forEach((currentValue: any, index: any) => {
            if (currentValue.StationId==="43377KYK") {
              data.push(currentValue.WS1min)
            }
            
            if (currentValue.StationId==="43377KYK") {
              data1.push(currentValue.WS3min)
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
            weekData1.push(currentValue.WS1min)
          }
          if (currentValue.StationId==="43377KYK") {
            weekData2.push(currentValue.WS3min)
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
          monthData1.push(currentValue.WS1min)
        }
        if (currentValue.StationId==="43377KYK") {
          monthData2.push(currentValue.WS3min)
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
        yearData1.push(currentValue.WS1min)
      }
      if (currentValue.StationId==="43377KYK") {
        yearData2.push(currentValue.WS3min)
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







  // call(){
  //   this.http.get('../../../../../../../assets/db.json').subscribe((result:any) => {
  //     this.data = result;

  //     debugger
  //     console.log('data::1::',this.data);
  //   })



function getChartOptions(_height: number ,windspeedone: any, windspeedthree: any,time?: any) {

  const labelColor = getCSSVariableValue('--bs-gray-500');
  const borderColor = getCSSVariableValue('--bs-gray-200');
  const baseColor = getCSSVariableValue('--bs-info');
  const lightColor = getCSSVariableValue('--bs-light-info');

  return {
    series: [
      {
        name: 'Wind Speed within 1 min',
        data: windspeedone
      },
      {
        name: 'Wind Speed within 3 min',
        data: windspeedthree
      }
    ],
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
      enabled: true,
    },
    autoSelected: 'zoom' ,
    // xaxis: {
    //   type: "datetime",
    //   categories: [
    //     "2018-09-19T00:00:00.000Z",
    //     "2018-09-19T01:30:00.000Z",
    //     "2018-09-19T02:30:00.000Z",
    //     "2018-09-19T03:30:00.000Z",
    //     "2018-09-19T04:30:00.000Z",
    //     "2018-09-19T05:30:00.000Z",
    //     "2018-09-19T06:30:00.000Z"
    //   ]
    // },
    xaxis: {
      categories: time || [
        0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30
      ]

     
      
    

      // categories: [
      //   '10:30:00',
      //   '10:31:00',
      //   '10:32:00',
      //   '10:33:00',
      //   ' 10:34:00',
      //   '10:35:00',
      //   '10:36:00',
      //   '10:37:00',
      //   '10:38:00',
      //   '10:39:00',
      //   ' 10:40:00',
      //   '10:41:00'
      // ],
    },

    tooltip: {
      // style: {
      //   fontSize: '12px',
      // },
      x: {
        format: "dd/MM/yy HH:mm"
      },
      y: {
        formatter: function (val: number) {
          return  + val +" "+ 'knot';
        },
      },
      
    },
  };
}
