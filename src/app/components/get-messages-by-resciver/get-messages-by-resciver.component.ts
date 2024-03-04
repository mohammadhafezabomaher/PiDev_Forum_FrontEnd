import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Message } from 'src/app/models/Meassage.model';
import { MessagesService } from 'src/app/services/messages.service';
import { AddmessageComponent } from '../addmessage/addmessage.component';

@Component({
  selector: 'app-get-messages-by-resciver',
  templateUrl: './get-messages-by-resciver.component.html',
  styleUrls: ['./get-messages-by-resciver.component.css']
})
export class GetMessagesByResciverComponent implements OnInit {
  Meassages:Message[]=[];

  constructor(private service:MessagesService,private dialog: MatDialog){}  

  ngOnInit(){
    this.service.getbyresciver(2).subscribe(data => {
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
