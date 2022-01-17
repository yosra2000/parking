import { Parking} from "./parking";

export class Voiture {
    id: number;
    nom: string;
    matricule: number;
    photo:string;
    couleur: string;
    parking :Parking;
}