import { Component, Inject, OnInit, SimpleChanges } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DialogData } from '../charts-widget9/charts-widget9.component';

// export interface DialogData{
//   show1: boolean;

//   show2: boolean
// }


@Component({
  selector: 'app-popup',
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.scss']
})
export class PopupComponent implements OnInit {

  show1:boolean =true;
  show2:boolean =true;
  // showActive: boolean = true;
  activestations : any= ['Port Blair',"Kalingapatnam","Vishakhapatnam",'Machilipatnam','Kakinada','Nellore','Ongole','Kavali',
  'Panjim','Mormugoa','Naliya','Bhuj','Veraval','Shrinagar','Salt Lake','Ratnagiri','Balasore','Paradeep','Gopalpur','Puri','Chandbali',
  'Bhubaneshwar','Chennai','Pamban','Kanyakumari','Adhirampattinam','Cuddlore','Tondi','Nagapattinam','Thoothukudi'];

  inactivestations : any= ['Karaikal','Puducherry','Haldiya','Digha']

  cancle(){
    this.show1=false
    this.show2=false
 
   }
 
 
 
  constructor(
   public dialogRef: MatDialogRef<PopupComponent>,
   @Inject(MAT_DIALOG_DATA) public data: DialogData,
  ){}
  // ngOnInit(): void {
  //   throw new Error('Method not implemented.');
  // }
  //  ngOnChanges(changes: SimpleChanges): void {
  //    throw new Error('Method not implemented.');
  //  }
   ngOnInit(): void {
     this.show1 = this.data.show1;
     this.show2 = this.data.show2;
   }
 
 }
 



