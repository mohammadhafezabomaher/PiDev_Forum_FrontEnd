import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Produit } from 'src/app/models/produit.model';
import { HttpProduitService } from 'src/app/services/http-produit.service';

@Component({
  selector: 'app-modify-product-modal',
  templateUrl: './modify-product-modal.component.html',
  styleUrls: ['./modify-product-modal.component.css']
})
export class ModifyProductModalComponent implements OnInit {
  produitForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private httpP: HttpProduitService,
    public dialogRef: MatDialogRef<ModifyProductModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Produit
  ) {
    this.produitForm = this.fb.group({
      libelle: [data.libelle, Validators.required],
      stock: [data.stock, Validators.required],
      prix: [data.prix, Validators.required]
    });
  }

  ngOnInit(): void {
  }

  handelSubmit() {
    // Update the existing product using HTTP service
    this.httpP.updateProduit(this.data.idProduit, this.produitForm.value).subscribe(() => {
      this.dialogRef.close(true); // Close the dialog with a flag indicating success
    });
  }

  onClose(): void {
    this.dialogRef.close(); // Close the dialog without any action
  }
}
