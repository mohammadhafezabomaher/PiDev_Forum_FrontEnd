import {typeOffre} from "./typeOffre"
import{Exposant} from "./Exposant"

export class Offre {
    idOffre: number;
    titre: string;
    description: string;
    dateDebut: Date;
    dateFin: Date;
    typeOffre:typeOffre; 
    Exposant: Exposant ;
    pack : string;
    submitted: boolean = false;
    imageUrl!: string;

    constructor(
        idOffre: number,
        titre: string,
        description: string,
        dateDebut: Date,
        dateFin: Date,
        typeOffre: typeOffre,
        Exposant: Exposant ,
        pack : string,

      ) {
        this.idOffre = idOffre;
        this.titre = titre;
        this.description = description;
        this.dateDebut = dateDebut;
        this.dateFin = dateFin;
        this.typeOffre = typeOffre;
        this.Exposant=Exposant;
        this.pack=pack;
      }
  }
