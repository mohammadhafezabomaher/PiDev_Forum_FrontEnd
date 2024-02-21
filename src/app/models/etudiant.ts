import { TypeEtudiant } from "./TypeEtudiant";
import { Contact } from "./contact";
import { NiveauSpecialite } from "./niveauspecialite";

export class Etudiant {
    idEtudiant: number;
    faculte: string;
    typeEtudiant: TypeEtudiant;
    contact: Contact;
    niveauSpecialite: NiveauSpecialite;
  
    constructor(
      idEtudiant: number,
      faculte: string,
      typeEtudiant: TypeEtudiant,
      contact: Contact,
      niveauSpecialite: NiveauSpecialite
    ) {
      this.idEtudiant = idEtudiant;
      this.faculte = faculte;
      this.typeEtudiant = typeEtudiant;
      this.contact = contact;
      this.niveauSpecialite = niveauSpecialite;
    }
  }