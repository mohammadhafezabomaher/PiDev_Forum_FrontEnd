import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { NiveauSpecialite } from 'src/app/models/niveauspecialite';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-nivupdate',
  templateUrl: './nivupdate.component.html',
  styleUrls: ['./nivupdate.component.css']
})
export class NivupdateComponent implements OnInit {
  editForm!: FormGroup;
  toEditColumn!: NiveauSpecialite;
  id!:number | null;
  constructor(private httpService: HttpService, private fb: FormBuilder, private rout: ActivatedRoute) { }
  ngOnInit(): void {
    const id = this.rout.snapshot.paramMap.get('id');
    if (id) {
    this.httpService.getNiveauSpecialiteById(+id).subscribe(niveauspecialite => {this.toEditColumn = niveauspecialite;
      console.log('Column fetched:', this.toEditColumn);
      this.updateForm();});
   
  }
  
    this.editForm = this.fb.group({
      idNiveauSpecialite: [''],
      libelle: [''],
      etablissement: [''],
      departement: [''],
    });
  }

  updateForm(): void {
    this.editForm = this.fb.group({
      idNiveauSpecialite: [this.toEditColumn.idNiveauSpecialite],
      libelle: [this.toEditColumn.libelle, Validators.required],
      etablissement: [this.toEditColumn.etablissement,Validators.required],
      departement: [this.toEditColumn.departement, Validators.required],
      
    });
  }
  
handelSubmitUpdate() {
  this.httpService.update(this.toEditColumn.idNiveauSpecialite, this.editForm.value).subscribe(
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
