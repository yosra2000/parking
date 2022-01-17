import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Parking } from 'src/app/modules/parking';
import { Voiture } from '../../modules/Voiture';
import { TestService } from '../../test.service';

@Component({
  selector: 'app-update-voiture',
  templateUrl: './update-voiture.component.html',
  styleUrls: ['./update-voiture.component.css']
})
export class UpdateVoitureComponent implements OnInit {
  id;
  voiture: Voiture;
  Parkings:Parking[];

  constructor(private ar:ActivatedRoute,private router:Router,private service:TestService) { }

  ngOnInit(){
    //tejbd l id  mil path
    this.id=+this.ar.snapshot.paramMap.get('id');
    this.service.getVoituresById(this.id).subscribe(
      data=>{ this.voiture=data
     console.log(this.voiture);
     this.getParkings();

      }
    )
  }
 ModifierVoiture()
 {

this.service.modifier(this.id,this.voiture).subscribe(
  ()=>
  this.router.navigate(['/Dashboard']))


 }
 

 getParkings()
 {
   this.service.getParkings().subscribe((data)=>{this.Parkings=data})
 }

 //recuper selet value
 compareFn(a, b) {
  // Handle compare logic (eg check if unique ids are the same)
  return a.id === b.id;
}
  
  // this.service.modifier(this.id,f.value).subscribe(()=>this.router.navigate(["/produitDetail"]));



















}
