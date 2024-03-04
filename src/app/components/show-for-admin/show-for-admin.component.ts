import { Component, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Commande } from 'src/app/models/Commande.model';
import { CommadnService } from 'src/app/services/commadn.service';
import { CommandAddComponent } from '../command-add/command-add.component';
import { ShareddataService } from 'src/app/services/shareddata.service';

@Component({
  selector: 'app-show-for-admin',
  templateUrl: './show-for-admin.component.html',
  styleUrls: ['./show-for-admin.component.css']
})
export class ShowForAdminComponent {
  displayedColumns: string[] = ['dateCommande', 'montantTotal','etat', 'forum titre','Email director','actions'];
  dataSource!: MatTableDataSource<Commande>;
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  directors: Commande[] = [];

  constructor(private service:CommadnService,private dialog: MatDialog,private dataService: ShareddataService) {
    
  
  }

ngAfterViewInit() {
      this.dataSource.sort = this.sort;
    }
    openDialog(): void {
      this.dialog.open(CommandAddComponent, {
       width: '400px',
       height:'500PX', 
     });
     }
     deleteAdmin(id:any):void{
       this.service.Delete(id).subscribe({
         next:() =>{alert("director deleted succesfuly"),
                       window.location.reload()
       },
         error:(error)=>console.error(error)
       }
       )
     }     
    //  showAdmin(DirectionFinanciere:DirectionFinanciere):void{
    //   this.dataService.setData(DirectionFinanciere);

    //    this.dialog.open(ShowdirectorComponent, {
    //      width: '800px',
    //      height:'600PX', 
    //    });
    //    }
      //  editAdmin(DirectionFinanciere:DirectionFinanciere):void{
      //   this.dataService.setData(DirectionFinanciere);
      //    this.dialog.open(UpdatedirectorComponent,{
      //      width:'800px',
      //      height:'600PX', 
      //     });
      //  }
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
