import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { HttpProduitService } from 'src/app/services/http-produit.service';

@Component({
  selector: 'app-add-product-modal',
  templateUrl: './add-product-modal.component.html',
  styleUrls: ['./add-product-modal.component.css']
})
export class AddProductModalComponent implements OnInit{
  produitForm: FormGroup;
  selectedFile: File | null = null;
    
          
  constructor(
    private http: HttpClient,
    private fb: FormBuilder,
    private httpP: HttpProduitService,
    public dialogRef: MatDialogRef<AddProductModalComponent>
  )  {
    this.produitForm = this.fb.group({
      
      image: [''],
      libelle: ['', Validators.required],
      stock: ['', Validators.required],
      prix: ['', Validators.required]
    });
  }

  ngOnInit(): void {
  }

  handelSubmit() {
    this.httpP.addTodo(this.produitForm.value).subscribe(() => {
      this.dialogRef.close();
      window.location.reload();
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
            let url=response.substring(41);
            this.produitForm.get('image')!.setValue(url);
          },
          error: (error) => console.error("Upload Error:", error)
        });
    }
  }

  onClose(): void {
    this.dialogRef.close();
  } 
 
}
