import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DirectionFinanciere } from 'src/app/models/DirectionFinanciere.model';
import { DirectionFinanciereService } from 'src/app/services/direction-financiere.service';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatIcon } from '@angular/material/icon';
import { AdddirectorComponent } from '../adddirector/adddirector.component';
import { UpdatedirectorComponent } from '../updatedirector/updatedirector.component';
import { MatDialog } from '@angular/material/dialog';
import { ShareddataService } from 'src/app/services/shareddata.service';
import { ShowdirectorComponent } from '../showdirector/showdirector.component';





@Component({
  selector: 'app-directionfinanciere',
  templateUrl: './directionfinanciere.component.html',
  styleUrls: ['./directionfinanciere.component.css']
})
export class DirectionfinanciereComponent implements OnInit {
  displayedColumns: string[] = ['cin', 'email','Nom', 'telephone','DateDebut','budget','actions'];
  dataSource!: MatTableDataSource<DirectionFinanciere>;
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  directors: DirectionFinanciere[] = [];

  constructor(private service: DirectionFinanciereService,private dialog: MatDialog,private dataService: ShareddataService) {
    
  
  }

ngAfterViewInit() {
      this.dataSource.sort = this.sort;
    }
    openDialog(): void {
      this.dialog.open(AdddirectorComponent, {
       width: '800px',
       height:'600PX', 
     });
     }
     deleteAdmin(id:any):void{
       this.service.deleteDirectionFinanciereService(id).subscribe({
         next:() =>{alert("director deleted succesfuly"),
                       window.location.reload()
       },
         error:(error)=>console.error(error)
       }
       )
     }     
     showAdmin(DirectionFinanciere:DirectionFinanciere):void{
      this.dataService.setData(DirectionFinanciere);

       this.dialog.open(ShowdirectorComponent, {
         width: '800px',
         height:'600PX', 
       });
       }
       editAdmin(DirectionFinanciere:DirectionFinanciere):void{
        this.dataService.setData(DirectionFinanciere);
         this.dialog.open(UpdatedirectorComponent,{
           width:'800px',
           height:'600PX', 
          });
       }
  ngOnInit(): void {
    this.fetchDirectors();   
  }
  fetchDirectors() {
    this.service.fetchAll().subscribe(data => {
      console.log(data);
      this.directors = data;
      this.dataSource = new MatTableDataSource(this.directors);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;

      console.log(this.directors);
      if (this.directors.length === 0) {
        console.log("we have no directors");
      } else {
        console.log("directors found");
      }
    });}
  
  
  
}
