import { DirectionFinanciere } from "./DirectionFinanciere.model";
import { Forum } from "./Fourm.model";

export class Commande {
    idCommande! : number;
    dateCommande!: Date;
    montantTotal !: number;
    etat !: string;
    forum!: Forum;
    directionFinanciere!: DirectionFinanciere;
  }
  