import{Offre} from "./offre"
import { Contact } from "./Contact";

export class Exposant{
    idExposant: number;
    siteOfficiel: string;
    pack :string;
    offres: Offre[];
    contact: Contact;

    constructor(idExposant: number, siteOfficiel: string, offres: Offre[], Pack: string,  contact: Contact,) {
        this.idExposant = idExposant;
        this.siteOfficiel = siteOfficiel;
        this.offres = offres;
        this.pack = Pack;
        this.contact = contact;

    }
}