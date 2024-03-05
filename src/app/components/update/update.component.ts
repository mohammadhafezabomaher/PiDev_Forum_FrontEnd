import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Offre } from 'src/app/models/offre';
import { FatmaService } from 'src/app/services/fatma.service';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {
  offreForm: FormGroup;
  
    constructor(
      private fb: FormBuilder,
      private httpService: FatmaService,
      public dialogRef: MatDialogRef<UpdateComponent>,
      @Inject(MAT_DIALOG_DATA) public data: Offre
    ) {
      this.offreForm = this.fb.group({
        titre: [data.titre, Validators.required],
        description: [data.description, Validators.required],
        dateDebut: [data.dateDebut, Validators.required],
        dateFin: [data.dateDebut, Validators.required],
        typeOffre: [data.typeOffre, Validators.required]
  
  
      });
    }
  
    ngOnInit(): void {
    }
  
    handelSubmit() {
      // Update the existing product using HTTP service
      this.httpService.updateOffre(this.data.idOffre, this.offreForm.value).subscribe(() => {
        this.dialogRef.close(true); // Close the dialog with a flag indicating success
      });
    }
  
    onClose(): void {
      this.dialogRef.close(); // Close the dialog without any action
    }
}

