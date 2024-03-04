import { Component } from '@angular/core';
import { Contact } from 'src/app/models/Contact.model';
import { DirectionFinanciere } from 'src/app/models/DirectionFinanciere.model';
import { ShareddataService } from 'src/app/services/shareddata.service';

@Component({
  selector: 'app-showdirector',
  templateUrl: './showdirector.component.html',
  styleUrls: ['./showdirector.component.css']
})
export class ShowdirectorComponent {
  dir !: Contact;
  receivedData !: DirectionFinanciere;
  constructor(private dataService: ShareddataService) {
    this.receivedData = this.dataService.getData();
    this.dir = this.receivedData.Contact;
  }


}
