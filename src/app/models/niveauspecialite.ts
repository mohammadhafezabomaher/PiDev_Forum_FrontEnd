import { Etudiant } from "./etudiant";

export class NiveauSpecialite {
    idNiveauSpecialite: number;
    libelle: string;
    etablissement: string;
    departement: string;
    etudiants: Etudiant[];
  
    constructor(
      idNiveauSpecialite: number,
      libelle: string,
      etablissement: string,
      departement: string,
      etudiants: Etudiant[]
    ) {
      this.idNiveauSpecialite = idNiveauSpecialite;
      this.libelle = libelle;
      this.etablissement = etablissement;
      this.departement = departement;
      this.etudiants = etudiants;
    }
  }