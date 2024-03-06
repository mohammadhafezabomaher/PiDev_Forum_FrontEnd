import { Fournisseur } from "./fournisseur";

export class Produit {
    idProduit: number;
    libelle: string;
    image: string;
    stock: number;
    prix: number;
    fournisseur: Fournisseur;
  
    constructor(idProduit: number, libelle: string, image: string, stock: number, prix: number, fournisseur: Fournisseur) {
      this.idProduit = idProduit;
      this.libelle = libelle;
      this.image = image;
      this.stock = stock;
      this.prix = prix;
      this.fournisseur = fournisseur;
    }
  }
  