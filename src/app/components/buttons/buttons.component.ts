import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-buttons',
  templateUrl: './buttons.component.html'
})

export class ButtonsComponent implements OnInit{
  areaOption: String[] = ["State", "District", "City"];
  areaSelected:String;

  ngOnInit(): void {
    this.areaSelected = "State";
    // throw new Error('Method not implemented.');
  }

  OnInit(){
    this.areaSelected = "State";
  }

  onSelected(val:any){
    this.areaSelected;
  }
}
