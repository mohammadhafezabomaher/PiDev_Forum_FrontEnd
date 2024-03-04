import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DirectionFinanciere } from 'src/app/models/DirectionFinanciere.model';
import { DirectionFinanciereService } from 'src/app/services/direction-financiere.service';

@Component({
  selector: 'app-adddirector',
  templateUrl: './adddirector.component.html',
  styleUrls: ['./adddirector.component.css']
})
export class AdddirectorComponent {
  directorForm!: FormGroup;

  constructor(private service: DirectionFinanciereService, private fb: FormBuilder) {
    this.directorForm = this.fb.group({
      dateDebut: ['', Validators.required],
      budget: ['', Validators.required],
      contact: this.fb.group({
        nom: ['', Validators.required],
        prenom: ['', Validators.required],
        cin: ['', Validators.required],
        email: ['', [Validators.required, Validators.email]],
        password: [''], // Add validators as needed
        image: 'string', // Add validators as needed
        dateNaissance: ['', Validators.required],
        telephone: ['', Validators.required],
        adresse: [''], // Add validators as needed
        role: 5 // Add validators as needed
      })
    });
  }

  private logErrors(control: any, field: string) {
    if (control.errors) {
      Object.keys(control.errors).forEach(keyError => {
        console.error(`Field: ${field}, Error: ${this.getErrorMessage(keyError, control.errors[keyError])}`);
      });
    }
  }

  private getErrorMessage(errorKey: string, errorValue: any) {
    const errorMessages: { [key: string]: string } = {
      required: 'This field is required',
      email: 'Invalid email format'
      // Add more error messages as needed
    };
    return errorMessages[errorKey];
  }

  onSubmit() {
    if (this.directorForm.valid) {
      console.log(this.directorForm.value);
      this.service.addDirectionFinanciereService(this.directorForm.value).subscribe({
        next: (m) => { 
          alert("admin added successfully!!");
        }
      });
    } else {
      // Loop through each form control to log errors
      Object.keys(this.directorForm.controls).forEach(field => {
        const control = this.directorForm.get(field);
        if (control instanceof FormGroup) {
          // If it's a nested FormGroup (like contact), loop through its controls
          Object.keys(control.controls).forEach(nestedField => {
            const nestedControl = control.get(nestedField);
            this.logErrors(nestedControl, nestedField);
          });
        } else {
          // If it's a regular FormControl
          this.logErrors(control, field);
        }
      });
    }
  }
}
