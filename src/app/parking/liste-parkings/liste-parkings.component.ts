import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { Router } from '@angular/router';
import { AjoutVoitureComponent } from '../../Voiture/ajout-voiture/ajout-voiture.component';
import { Parking } from '../../modules/parking';
import { ParkingService } from '../parking.service';

@Component({
  selector: 'app-liste-parkings',
  templateUrl: './liste-parkings.component.html',
  styleUrls: ['./liste-parkings.component.css']
})
export class ListeParkingsComponent implements OnInit {
 Parkings : Parking[];

 isLoading?: boolean = true;

  constructor(private service:ParkingService , 
    private router:Router,
    private dialog:MatDialog) { }tt

  ngOnInit(): void {

    //this.loadData();

    this.Load();

  }
 
  searchText?: string = '';

  Search() {
    this.service.recherchePmc(this.searchText).subscribe((data) => {
      this.Parkings = data;
    });
  }

  // refresh data after delete
  loadData(){
    this.service.getParkings().subscribe(data=>{
      console.log(data);
      this.Parkings=data;
      console.log("hhhhh ok");

      setTimeout(() => {
        this.isLoading = false;
      }, 1000);
      
      
      });
  }
  supprimer(id){
    this.service.delete(id).subscribe(()=>this.loadData());
  
   alert("voiture supprimé");

  }
  /************************** */
  AjouterVoitureId(parking){
    const dialogRef=this.dialog.open(AjoutVoitureComponent,{data:parking,
      width:'600px',
      height:'600px',
      disableClose:true});
    dialogRef.afterClosed().subscribe((response)=>{
      this.router.navigate(["/Dashboard"]);

    })


  }
  

  isEmpty() {
    if (this.Parkings.length == 0) {
      return true;
    }
    return false;
  }

  totalPages?: any;
  currentPage: any = 0;

  Prev() {
      if (this.currentPage > 0) {
        this.currentPage--;
        this.Load();
      }
  }

  Next() {
      if (this.currentPage < this.totalPages - 1) {
        this.currentPage++;
        this.Load();
      }
  }

  GoPage(i: any) {
      this.currentPage = i;
      this.Load();
  }

  Load() {
    this.service.getParkingPagin(this.currentPage).subscribe((data) => {
      this.Parkings = data.content;
      this.totalPages = data.totalPages;
      this.currentPage = data.number;

      setTimeout(() => {
        this.isLoading = false;
      }, 1000);
    });
  }


}



  
  
  