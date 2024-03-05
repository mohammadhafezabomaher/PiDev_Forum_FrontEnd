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
  searchTerm: string = '';
  

  todoForm!: FormGroup;
  show=false;

  currentPage: number = 1;
  itemsPerPage: number = 5; // Change this value based on your preference
  totalItems: number = 0;

  ngOnInit(): void {
    this.loadNiveauSpecialites();
    this.initForm();
  }

  loadNiveauSpecialites(): void {
    this.httpService.getAllNiveauSpecialites().subscribe(niveauSpecialite => {
      this.ListOfNiveauSpecialites = niveauSpecialite;
      this.totalItems = this.ListOfNiveauSpecialites.length;
    });
  }

  initForm(): void {
    this.todoForm = this.fb.group({
      libelle: [''],
      etablissement: [''],
      departement: [''],
    });
  }

  handelSubmit(): void {
    this.httpService.createNiveauSpecialite(this.todoForm.value).subscribe(() => {
      this.loadNiveauSpecialites();
    });
  }

  showAddTodo(): void {
    this.show = !this.show;
  }

  delete(id: number): void {
    this.httpService.deleteNiveauSpecialite(id).subscribe(() => {
      this.loadNiveauSpecialites();
    });
  }



  // Pagination methods
  getPages(): number[] {
    const pageCount = Math.ceil(this.totalItems / this.itemsPerPage);
    return Array(pageCount).fill(0).map((_, index) => index + 1);
  }

  changePage(page: number): void {
    this.currentPage = page;
  }

  search(): void {
    // Filter the list based on the search term
    this.ListOfNiveauSpecialites = this.ListOfNiveauSpecialites.filter(niveauSpecialite =>
      niveauSpecialite.libelle.toLowerCase().includes(this.searchTerm.toLowerCase())
    );
  }
}