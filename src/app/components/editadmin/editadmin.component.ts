import { HttpClient } from '@angular/common/http';
import { Component, OnInit, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Admin } from 'src/app/models/Admin.model';
import { AdminService } from 'src/app/services/admin.service';

@Component({
  selector: 'app-editadmin',
  templateUrl: './editadmin.component.html',
  styleUrls: ['./editadmin.component.css']
})
export class EditadminComponent implements OnInit {
  adminForm!: FormGroup;
  a:Admin=new Admin;
  isLoading=true;
  constructor(public dialogRef: MatDialogRef<EditadminComponent>, @Inject(MAT_DIALOG_DATA) public data: any,private fb: FormBuilder, private adminService: AdminService,private http: HttpClient){}
  ngOnInit(): void {
    this.adminService.getAdminById(this.data.key).subscribe({
      next: (res) => {
        this.a = res;
        this.adminForm=this.fb.group({
          idAdmin:this.a.idAdmin,
          dateDebut: this.a.dateDebut,
          contact:this.fb.group({
            nom: this.a.contact.nom,
            prenom: this.a.contact.prenom,
            cin: this.a.contact.cin,
            email:this.a.contact.email,
            password: this.a.contact.password,
            image: this.a.contact.image,
            dateNaissance: this.a.contact.dateNaissance,
            telephone: this.a.contact.telephone,
            adresse: this.a.contact.adresse,
          })
        });
        this.isLoading = false;
      },
      error: (error) => {
        console.error('There was an error!', error);
        this.isLoading = false;
      }
    });

  }
  uploadFile(event: any) {
    const file = event.target.files[0];
    if (file) {
      const formData = new FormData();
      formData.append('file', file);
  
      this.http.post('http://localhost:7020/api/uploadFile', formData, { responseType: 'text' })
        .subscribe({
          next: (response) => {
            console.log("Uploaded Successfully:", response);
            let url=response.substring(35);
            this.adminForm.get('contact.image')!.setValue(url);
          },
          error: (error) => console.error("Upload Error:", error)
        });
    }
  }
  onSubmit(): void {
    if (this.adminForm.valid) {
      console.log(this.adminForm.value);
      this.adminService.updateAdmin(this.adminForm.value).subscribe({
        next: (admin) =>{ alert("admin updated succesfully!!");
                          this.dialogRef.close();
                          window.location.reload();}
      });
    } else {
      console.error('Form is not valid');
    }
  }
  closeDialog(): void {
    this.dialogRef.close();
  }
  resetForm(): void {
    this.adminForm.reset();
  }
}
