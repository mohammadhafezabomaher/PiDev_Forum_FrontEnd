
import { Component, OnInit, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Offre } from 'src/app/models/offre';
import { typeOffre } from 'src/app/models/typeOffre';
import { HttpClient } from '@angular/common/http';
import { FatmaService } from 'src/app/services/fatma.service';


@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
  offreForm!: FormGroup;
  submitted: boolean = false;
  show = false;
  

  constructor(
    private fb: FormBuilder,
    private httpService: FatmaService,
    private http:HttpClient,
    public dialogRef: MatDialogRef<AddComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    this.show = data.showForm; // Initialiser la variable show avec la valeur transmise
    // Initialiser le formulaire uniquement si showForm est vrai
    if (this.show) {
      this.offreForm = this.fb.group({
        titre: ['', Validators.required],
        description: ['', Validators.required],
        dateDebut: ['', Validators.required],
        dateFin: ['', Validators.required],
        typeOffre: ['', Validators.required],
        imageUrl: ['']
      });
      
    }
    
  }
  

  ngOnInit(): void {
  }

  handelSubmit() {
    this.httpService.addOffre(this.offreForm.value).subscribe(newOffre => {
      console.log(this.offreForm.value)
      this.dialogRef.close(newOffre); // Ferme la boîte de dialogue en renvoyant la nouvelle offre ajoutée
     
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
            this.offreForm.get('imageUrl')!.setValue(url);
          },
          error: (error) => console.error("Upload Error:", error)
        });
    }
  }
  showaddOffre() {
    this.show = !this.show;
  }


  onClose(): void {
    this.dialogRef.close(); // Ferme la boîte de dialogue sans ajouter de nouvelle offre
  }
  onCancel(): void {
    this.dialogRef.close(); // Ferme la boîte de dialogue sans ajouter de nouvelle offre
  }
}
