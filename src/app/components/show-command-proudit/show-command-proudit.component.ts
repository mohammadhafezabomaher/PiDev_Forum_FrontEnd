import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CommandeProduit } from 'src/app/models/CommandeProduit .model';
import { ShareddataService } from 'src/app/services/shareddata.service';
import { CommadprouditService } from 'src/app/services/commadproudit.service';
import { Commande } from 'src/app/models/Commande.model';

@Component({
  selector: 'app-show-command-proudit',
  templateUrl: './show-command-proudit.component.html',
  styleUrls: ['./show-command-proudit.component.css']
})
export class ShowCommandProuditComponent {
  CommadnsProudits:CommandeProduit[]=[];
  Commnd!:number;
  constructor(private service: CommadprouditService,private dialog: MatDialog,private datass:ShareddataService) {
    
  
  }

  ngOnInit(): void {
 this.Commnd=this.datass.getData();
    this.fetchCommadnsProudits();   
  }
  fetchCommadnsProudits() {
    this.service.getbycommand(this.Commnd).subscribe(data => {
      this.CommadnsProudits = data;
      console.log(this.CommadnsProudits);
      if (this.CommadnsProudits.length === 0) {
        console.log("we have no directors");
      } else {
        console.log("directors found");
      }
    });}

}
