import { Contact } from "./Contact.model";
import { TypeFournisseur } from "./TypeFournisseur.model";
import { Produit } from "./produit.model";

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