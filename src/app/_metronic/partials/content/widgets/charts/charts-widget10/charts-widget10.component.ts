import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { PopupComponent } from '../popup/popup.component';
import { StationlistService } from 'src/app/stationlist.service';
import { ngxCsv } from "ngx-csv/ngx-csv";
// import { PopupComponent } from '../popup/popup.component';
@Component({
  selector: 'app-charts-widget10',
  templateUrl: './charts-widget10.component.html',
  styleUrls: ['./charts-widget10.component.scss']
})
export class ChartsWidget10Component {

  showtable:boolean;

  show1:boolean =false;
  show2:boolean =false;
 
  array :any= [];
  constructor(private dialogRef: MatDialog, private stationservices: StationlistService){}
  ngOnInit(){
    this.stationservices.getDashboard()
    .subscribe((result) => {
      console.warn("results",result)
      this.array=result
    })
    
    
  
  }

  openDialog1(){
    this.dialogRef.open(PopupComponent ,{
      data:{show1:true}
    });

  }
  openDialog2(){
    this.dialogRef.open(PopupComponent,{
      data:{show2:true}
    });
  }


fileDownload(){
  var abcd = {
    fieldSeparator: ',',
    quoteStrings: '"',
    decimalseparator:'.',
    showLabels: true,
    showTitle: true,
    title:'Stations Data',
    useBom: true,

    headers: ["Station","Wind Dir 1 min","Wind Dir 2 min","Wind Dir Max","Wind Speed 1 min","Wind Speed 3 min","Wind Speed Max","Pressure Insta","Pressure 1 min","Pressure 3 min","Pressure 10 min"]
  };
  new ngxCsv(this.array,"Stations Data", abcd);

}

searchText = ''
}



