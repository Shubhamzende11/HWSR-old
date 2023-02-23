import { Component, OnInit ,Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { StationlistService } from 'src/app/stationlist.service';

export interface DialogData{
  show1: boolean;

  show2: boolean
}


@Component({
  selector: 'app-pop-up',
  templateUrl: './pop-up.component.html',
  styleUrls: ['./pop-up.component.scss'],
})
export class PopUpComponent implements OnInit {

  show1:boolean =true;
  show2:boolean =true;
  activestations : any= ['Port Blair',"Kalingapatnam","Vishakhapatnam",'Machilipatnam','Kakinada','Nellore','Ongole','Kavali',
  'Panjim','Mormugoa','Naliya','Bhuj','Veraval','Shrinagar','Salt Lake','Ratnagiri','Balasore','Paradeep','Gopalpur','Puri','Chandbali',
  'Bhubaneshwar','Chennai','Pamban','Kanyakumari','Adhirampattinam','Cuddlore','Tondi','Nagapattinam','Thoothukudi'];

  inactivestations : any= ['Karaikal','Puducherry','Haldiya','Digha']

  cancle(){
    this.show1=false
    this.show2=false

   }



  constructor(public dialogRef: MatDialogRef<PopUpComponent>,@Inject(MAT_DIALOG_DATA) public data: DialogData, private stationservices: StationlistService){}


  ngOnInit(): void {
    this.show1 = this.data.show1;
    this.show2 = this.data.show2;
    
  }


}
