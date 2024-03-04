import { Commande } from "./Commande.model";
import { Produit } from "./produit.model";

export interface CommandeProduit {
    idCommandeProduit?: number;
    quantite?: number;
    commande?: Commande;
    produit?: Produit;
  }