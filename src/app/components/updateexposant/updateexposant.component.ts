import { Component, OnInit, Inject } from '@angular/core';
import { Exposant } from 'src/app/models/Exposant';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ExposantService } from 'src/app/services/exposant.service';


@Component({
  selector: 'app-updateexposant',
  templateUrl: './updateexposant.component.html',
  styleUrls: ['./updateexposant.component.css']
})
export class UpdateexposantComponent  implements OnInit {
  createForm: FormGroup;
  
  constructor(
    private fb: FormBuilder,
    private httpService: ExposantService,
    public dialogRef: MatDialogRef<UpdateexposantComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Exposant
  ) {
    this.createForm = this.fb.group({
      siteOfficiel: [data.siteOfficiel, Validators.required],
      pack: [data.pack, Validators.required],
      


    });
  }

  ngOnInit(): void {
  }

  handelSubmit() {
    // Update the existing product using HTTP service
    this.httpService.updateExposant(this.data.idExposant, this.createForm.value).subscribe(() => {
      this.dialogRef.close(true); // Close the dialog with a flag indicating success
    });
  }

  onClose(): void {
    this.dialogRef.close(); // Close the dialog without any action
  }


}
