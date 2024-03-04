import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { ForumService } from 'src/app/services/forum.service';

@Component({
  selector: 'app-ajouterforum',
  templateUrl: './ajouterforum.component.html',
  styleUrls: ['./ajouterforum.component.css']
})
export class AjouterforumComponent implements OnInit{
  forumForm!:FormGroup;
  constructor(public dialogRef: MatDialogRef<AjouterforumComponent>,private forumservice:ForumService,private http:HttpClient,private fb:FormBuilder){}
  ngOnInit(): void {
    this.forumForm = this.fb.group({
      budget: ['', Validators.required],
      description: ['', Validators.required],
      organisateur: ['', Validators.required],
      dateForum: ['', Validators.required],
      titre: ['', Validators.required],
      image: [''],
    });
  }
  onSubmit():void{
    if (this.forumForm.valid) {
      console.log(this.forumForm.value);
      this.forumservice.createForum(this.forumForm.value).subscribe({
        next: (forum) =>{ alert("admin added succesfully!!");
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
