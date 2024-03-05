import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NiveauSpecialite } from 'src/app/models/niveauspecialite';
import { EtudiantService } from 'src/app/services/etudiant.service';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-createtudiant',
  templateUrl: './createtudiant.component.html',
  styleUrls: ['./createtudiant.component.css']
})
export class CreatetudiantComponent implements OnInit {
  createForm!: FormGroup;
  imageUrl: string = 'assets/img/logo.jpg';
  niveauSpecialites: NiveauSpecialite[] = [];

  constructor(private httpService: EtudiantService,private nv:HttpService, private fb: FormBuilder,private http:HttpClient) {}

  ngOnInit(): void {
    this.createForm = this.fb.group({
      faculte: ['', Validators.required],
      typeEtudiant: ['', Validators.required],
      contact: this.fb.group({
        nom: ['', Validators.required],
        prenom: ['', Validators.required],
        cin: ['', Validators.required],
        email: ['', [Validators.required, Validators.email]],
        password: ['', Validators.required],
        dateNaissance: ['', Validators.required],
        telephone: ['', Validators.required],
        adresse: ['', Validators.required],
        image: [''],
      })
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
              let url=response.substring(42);
              this.createForm.get('contact.image')!.setValue(url);
            },
            error: (error) => console.error("Upload Error:", error)
          });
      }
    

    this.nv.getAllNiveauSpecialites().subscribe(
      (niveauSpecialites) => {
        this.niveauSpecialites = niveauSpecialites;
      },
      (error) => {
        console.log('Error fetching NiveauSpecialites:', error);
      }
    );



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

  // Helper method to access form controls and check their validity
  isControlInvalid(controlName: string): boolean {
    const control = this.createForm.get(controlName);
    return control !== null && control.invalid && control.touched;
  }
}
