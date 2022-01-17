import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { FormGroup } from "@angular/forms";
import { Observable } from "rxjs";
import { Parking } from "./modules/parking";
import { Voiture } from "./modules/Voiture";
const httpOptions = {
  headers: new HttpHeaders({ "Content-type": "application/json" }),
};
@Injectable({
  providedIn: "root",
})
export class TestService {
  host = "http://localhost:8081/App/";
  constructor(private client: HttpClient) {}
  public getVoitures(): Observable<Voiture[]> {
    return this.client.get<Voiture[]>(this.host + "getVoitures");
  }


  public addVoiture(Voiture: Voiture): Observable<void> {
    return this.client.post<void>(this.host + "ListeVoitures", Voiture);
  }


  public getParkings(): Observable<Parking[]> {
    return this.client.get<Parking[]>(this.host + "ListeParkings");
  }

  public delete(id): Observable<void> {
    return this.client.delete<void>(this.host + "ListeVoiture/" + id);
  }
  public modifier(id, voiture: Voiture): Observable<void> {
    return this.client.put<void>(
      this.host + "ListeVoitures/upDate/" + id,
      voiture
    );
  }

  public getVoituresById(id): Observable<Voiture> {
    return this.client.get<Voiture>(this.host + "ListeVoiture/" + id);
  }
  public getParkingById(id): Observable<Parking> {
    return this.client.get<Parking>(this.host + "ListeParking/" + id);
  }
  /*************************************************************** */

  public upload(file: any): Observable<any> {
    const formData = new FormData();
    formData.append("file", file, file.name);

    return this.client.post(this.host+"/upload", formData);
  }


  public getParkingPagin(currentPage: any = 0): Observable<any> {
    return this.client.get<any>(`${this.host}/pagin?pageNo=${currentPage}`);
  }


  /* public getParkingById(id):Observable<Parkings>
    {
    return this.client.get<Parkings>(this.host+"ListeParking/"+id);
    }

    public addProduct(parking:Parkings):Observable<void>
    {
    return this.client.post<void>(this.host+"ListeParkings",parking);
    }
    //install font anson icon al bouton FA FA trash ki nenzel al bouton yemchy lil ts  
    // w f delie url w id  t3adi wkhw ,
    //supprimer.sub( w n3awd nappeli il methode eli tatyni liste de produit),

    public delete(id):Observable<void>
    {
      return this.client.delete<void>(this.host+"ListeParkings/"+id);
    }

   public modifier(id,parking:Parkings):Observable<void>
    { 
      return this.client.put<void>(this.host+"ListeParkings/upDate/"+id,parking);
    }
  */
}
