import { Component, Inject, OnInit } from "@angular/core";
import { NgForm } from "@angular/forms";
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material";
import { Router } from "@angular/router";
import { Voiture } from "src/app/modules/Voiture";
import { Parking } from "../../modules/parking";
import { ParkingService } from "../../parking/parking.service";
import { TestService } from "../../test.service";

@Component({
  selector: "app-ajout-voiture",
  templateUrl: "./ajout-voiture.component.html",
  styleUrls: ["./ajout-voiture.component.css"],
})
export class AjoutVoitureComponent implements OnInit {
  Parkings: Parking[];
  voiture: Voiture;
  userFile;
  public imagePath;
  imgURL: any;
  image;
  public message: string;

  constructor(
    public dialogRef: MatDialogRef<AjoutVoitureComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Parking,
    private service: TestService,
    private servicePar: ParkingService,
    private router: Router
  ) {}
  ngOnInit() {
    this.voiture = new Voiture();
    if (this.data) {
      console.log(this.data);
      this.voiture.parking = this.data;
    }
    this.getParkings();
  }
  /////////// limage*/
  imageFile?: any;

  onChangeImage(event: any) {
    this.imageFile = event.target.files[0];
    this.voiture.photo = this.imageFile.name;
  }
  ///////////////////////////////////////////////////////////////////////////*/
  AjouterVoiture(f: NgForm) {
    if (this.data != null) {
      this.addVoitureToPArking();
      alert("voiture to park  ajoutée avec succée");
    }
  }

  addVoitureToPArking() {
    this.servicePar
      .addVoitureAuPark(this.voiture, this.data.id)
      .subscribe(() => {
        this.service.upload(this.imageFile).subscribe(
          (response) => {
            this.router.navigate(["/Dashboard"]);
          },
          (err) => {
            console.log(err.error);
          }
        );
        this.dialogRef.close();
      });
  }

  getParkings() {
    this.service.getParkings().subscribe((data) => {
      this.Parkings = data;
    });
  }
  compareFn(a, b) {
    // Handle compare logic (eg check if unique ids are the same)
    return a.id === b.id;
  }
 /*onSelectFile(event) {
    if (event.target.files.length > 0) {
      //appload the img

      const file = event.target.files[0];
      this.userFile = file;
      // this.f['profile'].setValue(file);
      // c pour l'affichage de l'image
      var mimeType = event.target.files[0].type;
      if (mimeType.match(/image\/*//*) == null) {
      /*  this.message = "Only images are supported.";
        return;
      }

      var reader = new FileReader();

      this.imagePath = file;
      reader.readAsDataURL(file);
      reader.onload = (_event) => {
        this.imgURL = reader.result;
      };
    }
  }*/
}
