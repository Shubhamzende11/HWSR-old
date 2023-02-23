
import { ChangeDetectorRef, Component, EventEmitter, Input, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { StationlistService } from 'src/app/stationlist.service';


@Component({
  selector: 'app-stations',
  templateUrl: './stations.component.html',
  styleUrls: ['./stations.component.scss'],

})
export class StationsComponent  {

  stationName: string = '';


  chartOptions: any = {};
  results: any;
  instantaneous:any=[];
  Average1min:any=[];
  Average3min:any=[];


  chartData: any = [];
  windspeedone: any =[];
  windspeedthree:any=[];
  winddirectionone:any=[];
  winddirectionthree:any=[];


  // windSpeedOneMinut: any[] = [10, 8, 8, 11, 10, 8, 9, 11, 7, 10, 11];
  // windSpeedThreeMinut: any[] = [7, 8, 9, 10, 5, 10, 9, 7, 6, 7, 6];
  // windSpeedMaximum: any[] = [11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11];
  // windDirectionOneMinut: any[] =[100,200,330,100,331,150,330,330,200,100,330];
  // windDirectionThreeMinut: any[] =[100,320,100,330,331,100,330,350,130,330,330];
 


  // public Data: {}
  // public message = ''



  constructor( private stationservices: StationlistService, private rotue: ActivatedRoute){}
ngOnInit() {
  this.stationName = this.rotue.snapshot.params['stationName'];
  // setTimeout(function(){
    //   location.reload();
    // },5000)
    setInterval(()=> {
      this.instant();
      this.avg1min();
      this.avg3min();
    },10000)
    
// this.instant();
// this.avg1min();
// this.avg3min();

}
instant(){
  this.stationservices.postInstantdata('').subscribe((res)=>{
    var Idata1:any=[];
    var Idata2:any=[];
    var Idata3:any=[];
    Idata1=res;
    Idata2=res;
    Idata3=res;
    this.instantaneous=Idata1.result;
    this.instantaneous=Idata2.result;
    this.instantaneous=Idata3.result;
    console.log(this.instantaneous)

    if (this.instantaneous || this.instantaneous.length > 0) {
      this.instantaneous.forEach((currentValue: any, index: any) => {
        if (currentValue?.['Wind_Speed(knot)']) {
          Idata1.push(currentValue?.['Wind_Speed(knot)'])
        }
        if (currentValue?.['Wind_Direction(deg)']) {
         Idata1.push(currentValue?.['Wind_Direction(deg)'])
        }
        if (currentValue?.["Wind Pressure(mbar)"]){
          Idata1.push(currentValue?.['Wind Pressure(mbar)'])
        }

        

      });
    }
  })
}
avg1min(){
  this.stationservices.postInstantdata('').subscribe((res)=>{
    var wind1minaverage:any=[];
    var direction1minaverage:any=[];
    var pressure1minaverage:any=[];

    wind1minaverage=res;
    direction1minaverage=res;
    pressure1minaverage=res;

    this.Average1min=wind1minaverage.result;
    this.Average1min=direction1minaverage.result;
    this.Average1min=pressure1minaverage.result;

    if (this.Average1min || this.Average1min.length > 0) {
      this.Average1min.forEach((currentValue: any, index: any) => {
        if (currentValue?.['Wind_Speed(knot)']) {
          wind1minaverage.push(currentValue?.['Wind_Speed(knot)'])
        }
        if (currentValue?.['Wind_Direction(deg)']) {
          direction1minaverage.push(currentValue?.['Wind_Direction(deg)'])
        }
        if (currentValue?.["Wind Pressure(mbar)"]){
          pressure1minaverage.push(currentValue?.['Wind Pressure(mbar)'])
        }
      });
    }


  })

}
avg3min(){
  this.stationservices.postInstantdata('').subscribe((res)=>{
    var wind3minaverage:any=[];
    var direction3minaverage:any=[];
    var pressure3minaverage:any=[];

    wind3minaverage=res;
    direction3minaverage=res;
    pressure3minaverage=res;

    this.Average3min=wind3minaverage.result;
    this.Average3min=direction3minaverage.result;
    this.Average3min=pressure3minaverage.result;

    if (this.Average3min || this.Average3min.length > 0) {
      this.Average3min.forEach((currentValue: any, index: any) => {
        if (currentValue?.['Wind_Speed(knot)']) {
          wind3minaverage.push(currentValue?.['Wind_Speed(knot)'])
        }
        if (currentValue?.['Wind_Direction(deg)']) {
          direction3minaverage.push(currentValue?.['Wind_Direction(deg)'])
        }
        if (currentValue?.["Wind Pressure(mbar)"]){
          pressure3minaverage.push(currentValue?.['Wind Pressure(mbar)'])
        }
      });
    }


  })
}

}
