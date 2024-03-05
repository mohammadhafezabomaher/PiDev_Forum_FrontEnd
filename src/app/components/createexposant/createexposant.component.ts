import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ExposantService } from 'src/app/services/exposant.service';



@Component({
  selector: 'app-createexposant',
  templateUrl: './createexposant.component.html',
  styleUrls: ['./createexposant.component.css']
})
export class CreateexposantComponent implements OnInit {
  createForm!: FormGroup;
  submitted: boolean = false;

  constructor(private httpService: ExposantService, private fb: FormBuilder) { }

  ngOnInit(): void {
    this.createForm = this.fb.group({
      
      siteOfficiel: ['',Validators.required],
      pack: ['',Validators.required],
      contact: this.fb.group({
        nom: ['',Validators.required],
        email: ['',[Validators.required, Validators.email]],
        password: ['', Validators.required],
        telephone: ['', [Validators.required, Validators.maxLength(8)]],
        adresse: ['', Validators.required],
        
      })
    });
  }

  // Ajoutez ces imports si nécessaire




  handelSubmit(): void {
    if (this.createForm.valid) {
      this.httpService.addExposant(this.createForm.value).subscribe(
        (response) => {
          console.log('Success:', response);
          this.createForm.reset();
          
        },
        (error) => {
          console.log('Error:', error);
        }
      );
    }
  }


}
