import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EtudiantService } from 'src/app/services/etudiant.service';

@Component({
  selector: 'app-createtudiant',
  templateUrl: './createtudiant.component.html',
  styleUrls: ['./createtudiant.component.css']
})
export class CreatetudiantComponent implements OnInit {
  createForm!: FormGroup;
  imageUrl: string = 'assets/img/logo.jpg';
  constructor(private httpService: EtudiantService, private fb: FormBuilder) { }

  ngOnInit(): void {
    this.createForm = this.fb.group({
      
      faculte: [''],
      typeEtudiant: [''],
      contact: this.fb.group({
        nom: [''],
        prenom: [''],
        cin: [''],
        email: [''],
        password: [''],
        dateNaissance: [''],
        telephone: [''],
        adresse: [''],
        
      })
    });
  }

  handelSubmit(): void {
    if (this.createForm.valid) {
      this.httpService.createEtudiant(this.createForm.value).subscribe(
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
