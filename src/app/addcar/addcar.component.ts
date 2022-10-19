import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-addcar',
  templateUrl: './addcar.component.html',
  styleUrls: ['./addcar.component.css']
})
export class AddcarComponent implements OnInit {

  constructor() { }
  name=""
  brand=""
  colour=""
  price=""

  readValue=()=>{
    let data={
      "name":this.name,
      "brand":this.brand,
      "colour":this.colour,
      "price":this.price
    }
  }

  ngOnInit(): void {
  }

}
