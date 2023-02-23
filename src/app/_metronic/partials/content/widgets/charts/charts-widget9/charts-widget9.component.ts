// import { Component, OnInit, OnChanges, ChangeDetectorRef, Input, SimpleChanges, Output, EventEmitter, ViewChild } from '@angular/core';
// import { bottom } from '@popperjs/core';
// import { getCSSVariableValue } from '../../../../../kt/_utils';
// import { HttpClient } from '@angular/common/http';
// import { ChartComponent } from "ng-apexcharts";
// import {
//   ApexNonAxisChartSeries,
//   ApexResponsive,
//   ApexChart
// } from "ng-apexcharts";

// export type ChartOptions = {
//   series: ApexNonAxisChartSeries;
//   chart: ApexChart;
//   responsive: ApexResponsive[];
//   labels: any;
// };




// @Component({
//   selector: 'app-charts-widget9',
//   templateUrl: './charts-widget9.component.html',
//   styleUrls: ['./charts-widget9.component.scss']
// })
// export class ChartsWidget9Component implements OnInit, OnChanges {
//   chartOptions: any = {};
//   @Input() windSpeedMax: any;

//   @Output() public childEvent = new EventEmitter();
//   chartData: any = []
//   results: any;
//   @ViewChild("charts") chart: ChartComponent;

//   yearToggle: boolean = false;
//   monthToggle: boolean = false;
//   weekToggle: boolean = false;




//   constructor(private http: HttpClient, private cd: ChangeDetectorRef) { }


//   ngOnChanges(changes: SimpleChanges): void {
//     this.chartOptions = getChartOptions(350, this.windSpeedMax);
//   }

//   ngOnInit(): void {
//     this.chartOptions = getChartOptions(350, this.windSpeedMax);
//     this.cd.detectChanges();
//     console.log(this.windSpeedMax)
//   }

//   displayYearData = () => {
//     let yearData: any = [9, 11, 10, 13, 15, 16, 11, 8, 11, 13, 11, 12];
//     this.yearToggle = true;
//     this.monthToggle = false;
//     this.weekToggle = false;
//     this.chartOptions = getChartOptions(350, yearData);
//     console.log('year Data');
//   }
//   displayMonthData = () => {
//     let monthData: any = [9, 15, 11, 12, 13, 14, 15, 16, 17, 18, 11, 10];
//     this.yearToggle = false;
//     this.monthToggle = true;
//     this.weekToggle = false;
//     this.chartOptions = getChartOptions(350, monthData);
//   }
//   displayWeekData = () => {
//     let weekData: any = [12, 11, 13, 14, 15, 9, 10, 11, 10, 10, 11];
//     this.yearToggle = false;
//     this.monthToggle = false;
//     this.weekToggle = true;
//     this.chartOptions = getChartOptions(350, weekData);
//   }

//   fireEvent() {
//     this.childEvent.emit('')
//   };

// }



// function getChartOptions(height: number, windSpeedMax: any) {

//   const labelColor = getCSSVariableValue('--bs-gray-500');
//   const borderColor = getCSSVariableValue('--bs-gray-200');
//   const baseColor = getCSSVariableValue('--bs-info');
//   const lightColor = getCSSVariableValue('--bs-light-info');


//   return {
//     series: windSpeedMax,
//       chart: {
//         width:530,
//         type: "pie"
//       },
//       labels: ["10:30:00",
//       "10:31:00",
//       "10:32:00",
//       "10:33:00",
//       "10:34:00",
//       "10:35:00",
//       "10:36:00",
//       "10:37:00",
//       "10:38:00",
//       "10:39:00",
//       "10:40:00"
//     ],
//       responsive: [
//         {
//           breakpoint: 480,
//           options: {
//             chart: {
//               width: 200
//             },
//             legend: {
//               position: "bottom"
//             }
//           }
//         }
//       ]
//     };
//   }
import { Component, Inject, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

export interface DialogData{
  show1: boolean;

  show2: boolean
}

@Component({
  selector: 'app-charts-widget9',
  templateUrl: './charts-widget9.component.html',
  styleUrls: ['./charts-widget9.component.scss']
})
export class ChartsWidget9Component implements OnInit, OnChanges{
  ngOnChanges(changes: SimpleChanges): void {
    throw new Error('Method not implemented.');
  }
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
}
//   show1:boolean =true;
//   show2:boolean =true;
//   showActive: boolean = true;
//   activestations : any= ['Port Blair',"Kalingapatnam","Vishakhapatnam",'Machilipatnam','Kakinada','Nellore','Ongole','Kavali',
//   'Panjim','Mormugoa','Naliya','Bhuj','Veraval','Shrinagar','Salt Lake','Ratnagiri','Balasore','Paradeep','Gopalpur','Puri','Chandbali',
//   'Bhubaneshwar','Chennai','Pamban','Kanyakumari','Adhirampattinam','Cuddlore','Tondi','Nagapattinam','Thoothukudi'];

//   inactivestations : any= ['Karaikal','Puducherry','Haldiya','Digha']


//  cancle(){
//    this.show1=false
//    this.show2=false

//   }



//  constructor(
//   public dialogRef: MatDialogRef<ChartsWidget9Component>,
//   @Inject(MAT_DIALOG_DATA) public data: DialogData,
//  ){}
//   ngOnChanges(changes: SimpleChanges): void {
//     throw new Error('Method not implemented.');
//   }
//   ngOnInit(): void {
//     this.show1 = this.data.show1;
//     this.show2 = this.data.show2;
//   }

// }
