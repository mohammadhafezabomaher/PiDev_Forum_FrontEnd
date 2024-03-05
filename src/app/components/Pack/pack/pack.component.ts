import { Component, OnInit } from '@angular/core';
import { Pack } from 'src/app/models/Pack.model';
import { PackService } from 'src/app/services/pack.service';
import { AddpackComponent } from '../addpack/addpack.component';
import { MatDialog } from '@angular/material/dialog';
import { AdminService } from 'src/app/services/admin.service';
import { EditpackComponent } from '../editpack/editpack.component';

@Component({
  selector: 'app-pack',
  templateUrl: './pack.component.html',
  styleUrls: ['./pack.component.css']
})
export class PackComponent implements OnInit{
  packs:Pack[]=[];
  isLoading = true;
  constructor(private packservice:PackService,private dialog: MatDialog,private adminservice:AdminService){}
  ngOnInit(): void {
    this.packservice.getAllPacks().subscribe((data) => {
      this.packs = data;
      this.isLoading=false;
    });
  }
  openDialog(): void {
    this.dialog.open(AddpackComponent, {
     width: '600px',
     height:'500PX', 
   });
   }
   getPackPhototUrl(pack: Pack): string {
    return this.adminservice.getPhoto(pack.image);
  }
  deletePack(id:any):void{
    this.packservice.deletePack(id).subscribe({
      next:() =>{alert("pack deleted succesfuly"),
                    window.location.reload()
    },
      error:(error)=>console.error(error)
    }
    )
  }
  editPack(id:number):void{
    this.dialog.open(EditpackComponent,{
      width: '600px',
     height:'500PX', 
      data:{key:id}
     });
  }
}
