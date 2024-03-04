import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Forum } from 'src/app/models/Forum.model';
import { AdminService } from 'src/app/services/admin.service';
import { ForumService } from 'src/app/services/forum.service';
import { AjouterforumComponent } from '../ajouterforum/ajouterforum.component';
import { ViewforumComponent } from '../viewforum/viewforum.component';
import { EditforumComponent } from '../editforum/editforum.component';
@Component({
  selector: 'app-forum',
  templateUrl: './forum.component.html',
  styleUrls: ['./forum.component.css']
})
export class ForumComponent implements OnInit{
    forums:Forum[]=[];
    allForums:Forum[]=[];
    isLoading=true;
    uniqueNames: string[] = [];
    selectedName: string = '';
    selectedT: string = '';
    startDate!: string; 
    endDate!: string; 
    nbrForum!:number;
    nbrEleveDeja=0;
    nbrExposantDeja=0;
    nbrForumFini=0;
    now = new Date()
    constructor(private forumservice:ForumService,private dialog: MatDialog,private adminservice:AdminService){}
    ngOnInit(): void {
      this.forumservice.getAllForums().subscribe((data)=>{
          this.allForums=data;
          this.forums = [...this.allForums];
          const names = this.forums.map(item => item.organisateur);
          this.uniqueNames = Array.from(new Set(names));
          this.isLoading=false;
          this.nbrForum=this.forums.length;
          this.allForums.forEach(f => {
            if(new Date(f.dateForum) <= this.now){
              if (f.nbrAlumniPresent)
              this.nbrEleveDeja=this.nbrEleveDeja+f.nbrAlumniPresent;
              if (f.nbrElevePresent)
              this.nbrEleveDeja=this.nbrEleveDeja+f.nbrElevePresent;
              if (f.nbrExposantPresent)
              this.nbrExposantDeja=this.nbrExposantDeja+f.nbrExposantPresent;
              this.nbrForumFini++;
            }
          });
      });
    }
    openDialog():void{
      this.dialog.open(AjouterforumComponent, {
        width: '800px',
        height:'600PX', 
      });
    }
    getPackPhototUrl(forum: Forum): string {
      return this.adminservice.getPhoto(forum.image);  
    }
    filterItems() {
      let filteredItems = this.allForums;
      if (this.selectedName) {
        filteredItems = filteredItems.filter(item => item.organisateur === this.selectedName);
      }
      if (this.startDate) {
        filteredItems = filteredItems.filter(item => new Date(item.dateForum) >= new Date(this.startDate));
      }
      if (this.endDate) {
        filteredItems = filteredItems.filter(item => new Date(item.dateForum) <= new Date(this.endDate));
      }
    this.forums = filteredItems;
    if (this.selectedT==="4"){
    this.forums.sort((a, b) => {
      return new Date(a.dateForum).getTime() - new Date(b.dateForum).getTime();
    });
    } 
    if (this.selectedT==="3"){
    this.forums.sort((a, b) => {
      return new Date(b.dateForum).getTime() - new Date(a.dateForum).getTime();
    });
    }
    if (this.selectedT==="1"){
      this.forums.sort((a, b) => a.organisateur.localeCompare(b.organisateur));
    }
    if (this.selectedT==="2"){
      this.forums.sort((a, b) => b.organisateur.localeCompare(a.organisateur));
    }
    }
    openViewDialog(id:number):void{
      this.dialog.open(ViewforumComponent, {
        width: '800px',
        height:'600PX', 
        data:{key:id}
      });
    }
    openEditDialog(id:number):void{
      this.dialog.open(EditforumComponent, {
        width: '800px',
        height:'600PX', 
        data:{key:id}
      });
    }
    deleteForum(id:number):void{
      this.forumservice.deleteForum(id).subscribe({
        next:() =>{alert("forum deleted succesfuly"),
                      window.location.reload()
      },
        error:(error)=>console.error(error)
      }
      )
    }
    
}
