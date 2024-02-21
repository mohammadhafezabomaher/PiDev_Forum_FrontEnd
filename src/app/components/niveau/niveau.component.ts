import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { NiveauSpecialite } from 'src/app/models/niveauspecialite';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-niveau',
  templateUrl: './niveau.component.html',
  styleUrls: ['./niveau.component.css']
})
export class NiveauComponent  implements OnInit {
  constructor(private httpService:HttpService,private fb:FormBuilder){}
  ListOfNiveauSpecialites!:NiveauSpecialite[];

  todoForm!: FormGroup;
  show=false;

  ngOnInit(): void {
    this.httpService.getAllNiveauSpecialites().subscribe(niveauSpecialite=>this.ListOfNiveauSpecialites=niveauSpecialite);

    this.todoForm=this.fb.group({
      libelle:[''],
      etablissement:[''],
      departement:[''],
    });
  }

  handelSubmit(){
    this.httpService.createNiveauSpecialite(this.todoForm.value).subscribe();
    this.ngOnInit();
   }

   showAddTodo(){
    this.show=!this.show;
  }
  delete(id: number) {
    this.httpService.deleteNiveauSpecialite(id).subscribe(() => {
      this.ngOnInit();
      window.location.reload();
    });
  }
 

}
