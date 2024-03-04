import { HttpClient } from '@angular/common/http';
import { Component, OnInit , Inject} from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Pack } from 'src/app/models/Pack.model';
import { AdminService } from 'src/app/services/admin.service';
import { PackService } from 'src/app/services/pack.service';

@Component({
  selector: 'app-editpack',
  templateUrl: './editpack.component.html',
  styleUrls: ['./editpack.component.css']
})
export class EditpackComponent implements OnInit{
  packForm!: FormGroup;
  p:Pack=new Pack;
  isLoading=true;
  constructor(public dialogRef: MatDialogRef<EditpackComponent>,@Inject(MAT_DIALOG_DATA) public data: any,private fb: FormBuilder, private adminService: AdminService,private http: HttpClient,private packService:PackService){}
  ngOnInit(): void {
    this.packService.getPackById(this.data.key).subscribe({
      next: (res) => {
        this.p = res;
        this.packForm=this.fb.group({
          idPack:this.p.idPack,
          prix:this.p.prix,
          libelle:this.p.libelle,
          image:this.p.image,
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
            let url=response.substring(35);
            this.packForm.get('contact.image')!.setValue(url);
          },
          error: (error) => console.error("Upload Error:", error)
        });
    }
  }
  onSubmit(): void {
    if (this.packForm.valid) {
      console.log(this.packForm.value);
      this.packService.updatePack(this.packForm.value).subscribe({
        next: (pack) =>{ alert("pack updated succesfully!!");
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
    this.packForm.reset();
  }
}
