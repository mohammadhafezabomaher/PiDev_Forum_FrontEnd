import { TypeFournisseur } from "./TypeFournisseur";
import { Contact } from "./contact";
import { Produit } from "./produit";

export class Fournisseur {
    idFournisseur: number;
    typeFournisseur: TypeFournisseur;
    contact: Contact;
    produits: Produit[];
  
    constructor(idFournisseur: number, typeFournisseur: TypeFournisseur, contact: Contact, produits: Produit[]) {
      this.idFournisseur = idFournisseur;
      this.typeFournisseur = typeFournisseur;
      this.contact = contact;
      this.produits = produits;
    }
}