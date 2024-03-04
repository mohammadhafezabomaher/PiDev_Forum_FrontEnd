import { Component, OnInit,Inject } from '@angular/core';
import { MatDialogRef,MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Forum } from 'src/app/models/Forum.model';
import { AdminService } from 'src/app/services/admin.service';
import { ForumService } from 'src/app/services/forum.service';

@Component({
  selector: 'app-viewforum',
  templateUrl: './viewforum.component.html',
  styleUrls: ['./viewforum.component.css']
})
export class ViewforumComponent implements OnInit{
  forum! : Forum;
  isLoading=true;
  constructor(public dialogRef: MatDialogRef<ViewforumComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,private forumservice:ForumService,private adminservice:AdminService){}
  ngOnInit(): void {
    this.forumservice.getForumById(this.data.key).subscribe({
      next :(f)=>
      {
        this.forum=f;
        this.isLoading=false;
      },
      error: (error) => {
        console.error('There was an error!', error);
        this.isLoading = false;
      }
    }
    )
  }
  getAdminPhotoUrl(forum: Forum): string {
    // Construct the image URL based on the backend API endpoint
    return this.adminservice.getPhoto(forum.image);
    
  }
}
