import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ParkingService } from '../parking.service';

@Component({
  selector: 'app-ajout-parking',
  templateUrl: './ajout-parking.component.html',
  styleUrls: ['./ajout-parking.component.css']
})
export class AjoutParkingComponent implements OnInit {

  constructor(private service:ParkingService,private router:Router) { }

  ngOnInit() {
  }

  AjouterParking(f:NgForm)
  {
this.service.addParking(f.value).subscribe(()=>this.router.navigate(["/ListeParkings"]));
  }

}
