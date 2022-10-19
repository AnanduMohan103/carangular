import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-addcar',
  templateUrl: './addcar.component.html',
  styleUrls: ['./addcar.component.css']
})
export class AddcarComponent implements OnInit {

  constructor(private myapi:ApiService) { }
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
    console.log(data)
    this.myapi.addCar(data).subscribe(
      (response)=>{
        console.log("test")
      }
    )
    alert("successfully added")
    this.name=""
    this.brand=""
    this.colour=""
    this.price=""
  }

  ngOnInit(): void {
  }

}
