import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Admin } from 'src/app/models/Admin.model';
import { Contact } from 'src/app/models/Contact.model';
import { AdminService } from 'src/app/services/admin.service';

@Component({
  selector: 'app-viewaddmin',
  templateUrl: './viewaddmin.component.html',
  styleUrls: ['./viewaddmin.component.css']
})
export class ViewaddminComponent implements OnInit {
  a:Admin=new Admin;
  isLoading = true;
  constructor(
    public dialogRef: MatDialogRef<ViewaddminComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,public adminservice: AdminService) {}
    ngOnInit():void{
      this.adminservice.getAdminById(this.data.key).subscribe({
        next: (res) => {
          this.a = res;
          console.log(res);
          this.isLoading = false;
          console.log(this.a.contact.image);
        },
        error: (error) => {
          console.error('There was an error!', error);
          this.isLoading = false;
        }
      });
      
    }
  getAdminPhotoUrl(admin: Admin): string {
      // Construct the image URL based on the backend API endpoint
      return this.adminservice.getPhoto(admin.contact.image);
      
    }

  closeDialog(): void {
    // You can send back any data. Here, as an example, we're sending back a simple message.
    this.dialogRef.close({ result: 'This is the result data from the dialog' });
  }
}
