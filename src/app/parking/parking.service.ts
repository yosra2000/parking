import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Parking } from '../modules/parking';
import { Voiture} from '../modules/Voiture';


@Injectable({
  providedIn: 'root'
})
export class ParkingService {

  host="http://localhost:8081/App/"
  constructor(private client:HttpClient) {}

  public getParkings():Observable<Parking[]>{
  
    return this.client.get<Parking[]>(this.host+"ListeParkings");
  } 

  public delete(id):Observable<void>
  {
    return this.client.delete<void>(this.host+"ListeParking/delete/"+id);
  }

  public addVoitureAuPark(Voiture: Voiture ,id:number ): Observable<void> {
    return this.client.post<void>(this.host +"parkings/"+id+"/voiture",Voiture);

  }
  public addParking(parking:Parking):Observable<void>
  {
  return this.client.post<void>(this.host+"ListeParkings",parking);
  }

   public recherchePmc (mc :any):Observable<Parking[]>{
  
    return this.client.get<Parking[]>(this.host+"ListeParkings/"+mc);
  } 
  
  public getParkingPagin(currentPage: any = 0): Observable<any> {
    return this.client.get<any>(`${this.host}/pagin?pageNo=${currentPage}`);
  }


  
 
}
