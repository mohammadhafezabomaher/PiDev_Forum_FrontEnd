import { TypeRole } from "./TypeRole";
import { Fournisseur } from "./fournisseur";

export class Contact {
    idContact: number;
    nom: string;
    prenom: string;
    cin: number;
    email: string;
    password: string;
    image: string;
    dateNaissance: Date;
    telephone: number;
    adresse: string;
    role: TypeRole;
    fournisseur: Fournisseur;

    constructor(
      idContact: number,
      nom: string,
      prenom: string,
      cin: number,
      email: string,
      password: string,
      image: string,
      dateNaissance: Date,
      telephone: number,
      adresse: string,
      role: TypeRole,
      fournisseur: Fournisseur
      
    ) {
      this.idContact = idContact;
      this.nom = nom;
      this.prenom = prenom;
      this.cin = cin;
      this.email = email;
      this.password = password;
      this.image = image;
      this.dateNaissance = dateNaissance;
      this.telephone = telephone;
      this.adresse = adresse;
      this.role = role;
      this.fournisseur = fournisseur
    }
  }