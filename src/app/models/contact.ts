import { TypeRole } from "./TypeRole";
import { Etudiant } from "./etudiant";

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
    etudiant: Etudiant;
  
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
      etudiant: Etudiant
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
      this.etudiant = etudiant;
    }
  }