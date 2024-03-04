import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { AdminService } from 'src/app/services/admin.service';
import { PackService } from 'src/app/services/pack.service';

@Component({
  selector: 'app-addpack',
  templateUrl: './addpack.component.html',
  styleUrls: ['./addpack.component.css']
})
export class AddpackComponent implements OnInit {
  packForm!: FormGroup;
  constructor(public dialogRef: MatDialogRef<AddpackComponent>,private fb: FormBuilder, private adminService: AdminService,private http: HttpClient,private packService:PackService) { }
  ngOnInit(): void {
    this.packForm = this.fb.group({
      libelle: ['', Validators.required],
      prix: ['', Validators.required],
      image: [''],
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
            this.packForm.get('image')!.setValue(url);
          },
          error: (error) => console.error("Upload Error:", error)
        });
    }
}
onSubmit(): void {
  if (this.packForm.valid) {
    this.packService.createPack(this.packForm.value).subscribe({
      next: (pack) =>{ alert("pack added succesfully!!");
                        this.dialogRef.close();
                        window.location.reload();}
    });
  } else {
    console.error('Form is not valid');
  }
}
}