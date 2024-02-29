import { Component,OnInit,ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Admin } from 'src/app/models/Admin.model';
import { AdminService } from 'src/app/services/admin.service';
import { AddadminComponent } from '../addadmin/addadmin.component';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { ViewaddminComponent } from '../viewaddmin/viewaddmin.component';
import { EditadminComponent } from '../editadmin/editadmin.component';
@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit{
  admins:Admin[]=[];
  displayedColumns: string[] = ['idAdmin', 'Nom', 'DateDebut', 'Email','actions'];
  dataSource!: MatTableDataSource<Admin>;
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  constructor(private adminsService: AdminService,private dialog: MatDialog) { }

  ngOnInit(): void {
    this.adminsService.getAllAdmins().subscribe((data) => {
      this.admins = data;
      this.dataSource = new MatTableDataSource(this.admins);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    });
    }
    openDialog(): void {
     this.dialog.open(AddadminComponent, {
      width: '800px',
      height:'600PX', 
    });
    }
    deleteAdmin(id:any):void{
      this.adminsService.deleteAdmin(id).subscribe({
        next:() =>{alert("admin deleted succesfuly"),
                      window.location.reload()
      },
        error:(error)=>console.error(error)
      }
      )
    }
    ngAfterViewInit() {
      this.dataSource.sort = this.sort;
    }
    showAdmin(id:any):void{
      this.dialog.open(ViewaddminComponent, {
        width: '800px',
        height:'600PX', 
        data:{key:id}
      });
      }
      editAdmin(id:number):void{
        this.dialog.open(EditadminComponent,{
          width:'800px',
          height:'600PX', 
          data:{key:id}
         });
      }
    }

