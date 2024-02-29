import { Component, OnInit } from '@angular/core';
import { Pack } from 'src/app/models/Pack.model';
import { PackService } from 'src/app/services/pack.service';
import { AddpackComponent } from '../addpack/addpack.component';
import { MatDialog } from '@angular/material/dialog';
import { AdminService } from 'src/app/services/admin.service';

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
     width: '800px',
     height:'600PX', 
   });
   }
   getPackPhototUrl(pack: Pack): string {
    // Construct the image URL based on the backend API endpoint
    return this.adminservice.getPhoto(pack.image);
    
  }
}
