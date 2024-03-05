import { Fournisseur } from "./fournisseur.model";

export class Produit {
    idProduit!: number;
    libelle!: string;
    image!: string;
    stock!: number;
    prix!: number;
    fournisseur!: Fournisseur;
  
  
    
  }
  