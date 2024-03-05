import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TypeFournisseur } from 'src/app/models/TypeFournisseur.model';
import { HttpFournisseurService } from 'src/app/services/http-fournisseur.service';

@Component({
  selector: 'app-create-fournisseur',
  templateUrl: './create-fournisseur.component.html',
  styleUrls: ['./create-fournisseur.component.css']
})
export class CreateFournisseurComponent implements OnInit {
  createForm!: FormGroup;
  typeFournisseurOptions: string[] = Object.values(TypeFournisseur); 
  submitted: boolean = false;

  constructor(private httpService: HttpFournisseurService, private fb: FormBuilder) { }

  ngOnInit(): void {
    this.createForm = this.fb.group({
      typeFournisseur: ['',Validators.required],
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
      this.httpService.addTodo(this.createForm.value).subscribe(
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
