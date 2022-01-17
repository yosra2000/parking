import { Voiture } from "./Voiture";

export class Parking {
    id: number;
    nom: string;
    localisation: string;
    surface:number;
    prix:number;
    liste:Voiture[];
}
