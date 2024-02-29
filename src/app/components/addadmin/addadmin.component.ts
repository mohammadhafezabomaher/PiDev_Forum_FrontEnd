import { Component, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Admin } from 'src/app/models/Admin.model';
import { AdminService } from 'src/app/services/admin.service';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-addadmin',
  templateUrl: './addadmin.component.html',
  styleUrls: ['./addadmin.component.css']
})
export class AddadminComponent {
  adminForm!: FormGroup;
  constructor(public dialogRef: MatDialogRef<AddadminComponent>,private fb: FormBuilder, private adminService: AdminService,private http: HttpClient) { }
  ngOnInit(): void {
    this.adminForm = this.fb.group({
      dateDebut: [null, Validators.required],
      contact: this.fb.group({
        nom: ['', Validators.required],
        prenom: ['', Validators.required],
        cin: ['', Validators.required],
        email: ['', [Validators.required, Validators.email]],
        password: ['', Validators.required],
        image: [''],
        dateNaissance: [null, Validators.required],
        telephone: ['', Validators.required],
        adresse: ['', Validators.required],
        role: 1
      })
    });
  }
  onSubmit(): void {
    if (this.adminForm.valid) {
      console.log(this.adminForm.value);
      this.adminService.createAdmin(this.adminForm.value).subscribe({
        next: (admin) =>{ alert("admin added succesfully!!");
                          this.dialogRef.close();
                          window.location.reload();}
      });
    } else {
      console.error('Form is not valid');
    }
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
            // Assuming the response is the path where the file is stored,
            // and you have a form field for 'imagePath' or similar in your adminForm
            this.adminForm.get('contact.image')!.setValue(response);
          },
          error: (error) => console.error("Upload Error:", error)
        });
    }
  }
  
}
