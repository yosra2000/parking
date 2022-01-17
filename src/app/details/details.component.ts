import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Voiture } from '../modules/Voiture';
import { ParkingService } from '../parking/parking.service';
import { TestService } from '../test.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
//  id:number;
voiture:Voiture;

  constructor(private ar:ActivatedRoute,private router:Router, private service:TestService) { }
  imgUrll:any="http://localhost:8081/App/getImage/";

  ngOnInit() {
    let id:number
this.ar.paramMap.subscribe((params)=>{
id=+params.get('id')
this.service.getVoituresById(id).subscribe(data=>{
this.voiture=data;
})
});}


retour()
{
  this.router.navigate(['/Dashboard']);

}


}


