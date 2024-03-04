import { HttpClient } from '@angular/common/http';
import { Component, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Forum } from 'src/app/models/Forum.model';
import { ForumService } from 'src/app/services/forum.service';

@Component({
  selector: 'app-editforum',
  templateUrl: './editforum.component.html',
  styleUrls: ['./editforum.component.css']
})
export class EditforumComponent {
  forumForm!:FormGroup;
  isLoading=true;
  f:Forum=new Forum;
  constructor(public dialogRef: MatDialogRef<EditforumComponent>, @Inject(MAT_DIALOG_DATA) public data: any,private forumservice:ForumService,private http:HttpClient,private fb:FormBuilder){}
  ngOnInit(): void {
    this.forumservice.getForumById(this.data.key).subscribe({
      next: (res) => {
        this.f = res;
        this.forumForm=this.fb.group({
          idForum:this.f.idForum,
          dateForum: this.f.dateForum,
          budget: this.f.budget,
          description: this.f.description,
          image: this.f.image,
          titre: this.f.titre,
          organisateur: this.f.organisateur,
        });
        this.isLoading = false;
      },
      error: (error) => {
        console.error('There was an error!', error);
        this.isLoading = false;
      }
    });
  }
  onSubmit():void{
    if (this.forumForm.valid) {
      console.log(this.forumForm.value);
      this.forumservice.updateForum(this.forumForm.value).subscribe({
        next: (forum) =>{ alert("forum update succesfully!!");
                          this.dialogRef.close();
                          window.location.reload();}
      });
    } else {
      console.error('Form is not valid');
    }
  }
  uploadFile(event: any) {
    const file = event.target.files[0];
    if (file) {
      const formData = new FormData();
      formData.append('file', file);
  
      this.http.post('http://localhost:7020/api/uploadFile', formData, { responseType: 'text' })
        .subscribe({
          next: (response) => {
            console.log("Uploaded Successfully:", response);
            let url=response.substring(35);
            this.forumForm.get('image')!.setValue(url);
          },
          error: (error) => console.error("Upload Error:", error)
        });
    }
}
}
