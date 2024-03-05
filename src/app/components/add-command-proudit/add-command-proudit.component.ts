import { Produit } from './../../models/produit.model';
import { CommadprouditService } from 'src/app/services/commadproudit.service';
import { CommandeProduit } from './../../models/CommandeProduit .model';
import { Component } from '@angular/core';
import { Commande } from 'src/app/models/Commande.model';
import { CommadnService } from 'src/app/services/commadn.service';
import { ShareddataService } from 'src/app/services/shareddata.service';
import { Fournisseur } from 'src/app/models/fournisseur.model';

@Component({
  selector: 'app-add-command-proudit',
  templateUrl: './add-command-proudit.component.html',
  styleUrls: ['./add-command-proudit.component.css']
})
export class AddCommandProuditComponent {
  constructor(private service:CommadprouditService,private CService:CommadnService,private dataService: ShareddataService ) { }

  commandproudit!: CommandeProduit;
  inputMessage: string = '';
  inputmissing:boolean = false;
  selectedObject: Commande | null = null; 
  commandes: Commande[] = [];
  quantite !:number;
  Produit !:Produit;

  onSelectObject() {
    console.log(this.selectedObject);
  }
  

  ngOnInit(){
    this.CService.fetchAll().subscribe(data => {
      this.commandes = data;
      console.log(this.commandes);
    });
    this.Produit = this.dataService.getData();

    
  }

  onSubmit(event: Event) {
    // Reset error flags
    this.inputmissing = false;

    // Check if input message is null or empty
    if ( !this.selectedObject  ) {
      console.log("Inputs are empty or recipient is not selected. Please re-enter your message.");
      this.inputmissing = true; // Set inputmissing flag to true
      return;
    }


this.commandproudit = new CommandeProduit();
this.commandproudit.produit = this.Produit;
this.commandproudit.commande=this.selectedObject;
this.commandproudit.quantite=this.quantite;

   
    this.service.add(this.commandproudit).subscribe({
      next: (m) => { 
        alert("command proudit created");
      }
    });;
    // Clear input message after successful submission
    this.inputMessage = '';
  }


  

}
