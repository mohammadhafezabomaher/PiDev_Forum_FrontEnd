import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MessagesService } from 'src/app/services/messages.service';
import { AddmessageComponent } from '../addmessage/addmessage.component';
import { Message } from 'src/app/models/Meassage.model';

@Component({
  selector: 'app-get-messages-by-sender',
  templateUrl: './get-messages-by-sender.component.html',
  styleUrls: ['./get-messages-by-sender.component.css']
})
export class GetMessagesBySenderComponent {
  Meassages:Message[]=[];

  constructor(private service:MessagesService,private dialog: MatDialog){}  

  ngOnInit(){
    this.service.getBySender(2).subscribe(data => {
      this.Meassages = data;
      console.log(this.Meassages);
    });
  }
  openDialog(): void {
    this.dialog.open(AddmessageComponent, {
     width: '400px',
     height:'300PX', 
   });
   }

}
