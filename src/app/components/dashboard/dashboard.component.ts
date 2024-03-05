import { Component, OnInit } from '@angular/core';
import { Forum } from 'src/app/models/Forum.model';
import { ForumService } from 'src/app/services/forum.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
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
    constructor(private forumservice:ForumService){}
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
}
