import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { Voiture } from "../../modules/Voiture";
import { TestService } from "../../test.service";

@Component({
  selector: "app-dashboard",
  templateUrl: "./dashboard.component.html",
  styleUrls: ["./dashboard.component.css"],
})
export class DashboardComponent implements OnInit {
  Voitures: Voiture[];

  imgUrll:any="http://localhost:8081/App/getImage/";

  constructor(private service: TestService, private router: Router) {}

  ngOnInit(): void {
    this.loadData();
  }
loadData(){
  this.service.getVoitures().subscribe((data) => {
    console.log(data);
    this.Voitures = data;
    console.log(data);
  });
}


//bch il data yarrj3ou fil supprimer kima kenou 
  supprimer(id) {
    this.service
      .delete(id)
      .subscribe(() => this.loadData());

    alert("voiture supprimé");
  }

}
