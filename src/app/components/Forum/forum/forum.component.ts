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
    startDate!: string; 
    endDate!: string; 
    constructor(private forumservice:ForumService,private dialog: MatDialog,private adminservice:AdminService){}
    ngOnInit(): void {
      this.forumservice.getAllForums().subscribe((data)=>{
          this.allForums=data;
          this.forums = [...this.allForums];
          const names = this.forums.map(item => item.organisateur);
          this.uniqueNames = Array.from(new Set(names));
          this.isLoading=false;
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
    filterItemsByName() {
      if (this.selectedName) {
        this.forums = this.allForums.filter(item => item.organisateur === this.selectedName);
      } else {
        this.forums = [...this.allForums];
      }
    }
    filterByDate() {
      let filteredItems = this.allForums;
  
      if (this.startDate) {
        filteredItems = filteredItems.filter(item => new Date(item.dateForum) >= new Date(this.startDate));
      }
  
      if (this.endDate) {
        filteredItems = filteredItems.filter(item => new Date(item.dateForum) <= new Date(this.endDate));
      }
  
      this.forums = filteredItems;
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
    
}
