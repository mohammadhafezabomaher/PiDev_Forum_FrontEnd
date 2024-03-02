import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Etudiant } from 'src/app/models/etudiant';
import { EtudiantService } from 'src/app/services/etudiant.service';

@Component({
  selector: 'app-etupdate',
  templateUrl: './etupdate.component.html',
  styleUrls: ['./etupdate.component.css']
})
export class EtupdateComponent implements OnInit{
  editForm!: FormGroup;
  toEditColumn!: Etudiant;
  id!:number | null;
  constructor(private httpService: EtudiantService, private fb: FormBuilder, private rout: ActivatedRoute) { }
  ngOnInit(): void {
    const id = this.rout.snapshot.paramMap.get('id');

    if (id) {
      this.httpService.getEtudiantById(+id).subscribe(etudiant => {this.toEditColumn = etudiant;
        console.log('Column fetched:', this.toEditColumn);
        this.updateForm();});
     
    }
    this.editForm = this.fb.group({
      idEtudiant: [''],
   
      faculte: [''],
      identifiant: [''],
      
      typeEtudiant: [''],
      
    });

}

updateForm(): void {
  this.editForm = this.fb.group({
    idEtudiant: [this.toEditColumn.idEtudiant],
  
    faculte: [this.toEditColumn.faculte, Validators.required],
    identifiant: [this.toEditColumn.identifiant, Validators.required],
    typeEtudiant: [this.toEditColumn.typeEtudiant, Validators.required],
    
    
    
  });
}

handelSubmitUpdate() {
  this.httpService.update(this.toEditColumn.idEtudiant, this.editForm.value).subscribe(
    (response) => {
      console.log('Success:', response);
      this.editForm.reset();
    },
    (error) => {
      console.log('Error:', error);
    }
  );
}
update(): void {
  this.updateForm();
}
}
