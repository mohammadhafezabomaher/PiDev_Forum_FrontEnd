import { Component } from '@angular/core';
import { EnseignantService } from '../../services/enseignant.service';
import { Enseignant } from 'src/app/models/enseignant.model';
declare const cloudinary: any;

@Component({
  selector: 'app-enseignant',
  templateUrl: './enseignant.component.html',
  styleUrls: ['./enseignant.component.css']
})
export class EnseignantComponent {
  message: string = '';
  enseignant: Enseignant = new Enseignant(); 
  showSuccessMessage: boolean = false;
  selectedFile: File | null = null;
  selectedFileUrl: string | null = null;

  constructor(private enseignantService: EnseignantService) { 
    this.enseignant = new Enseignant(); 
  }

  ngOnInit(): void {
    this.loadCloudinaryWidget();
  }

  loadCloudinaryWidget(): void {
    const widget = cloudinary.createUploadWidget(
      {
        cloudName: 'she-codes-africa',
        uploadPreset: 'Images_cloudinary',
        sources: ['local', 'url', 'camera', 'image_search', 'facebook', 'instagram', 'google_drive', 'dropbox'],
        clientAllowedFormats: ['png', 'jpeg', 'jpg'],
        maxFileSize: 5000000,
        maxImageWidth: 2000,
        maxImageHeight: 2000
      },
      (error: any, result: any) => {
        if (!error && result && result.event === "success") {
          this.selectedFileUrl = result.info.secure_url;
          // If you need to extract the file object for uploading to your backend
          // this.selectedFile = result.info; // Ensure 'info' contains the necessary file information
        }
      }
    );

    const cloudinaryUploadElement = document.getElementById('cloudinaryUpload');
    if (cloudinaryUploadElement) {
      cloudinaryUploadElement.addEventListener('click', () => {
        widget.open();
      });
    }
  }

  addEnseignant(): void {
    // Check if an image is selected
    if (!this.selectedFileUrl) {
      console.error("No image uploaded");
      return;
    }
  
    // Create a new FormData object
    const formData: FormData = new FormData();
  
    // Append other form data fields
    formData.append('dateDebut', this.enseignant.dateDebut?.toString() ?? '');
    formData.append('email', this.enseignant.email ?? '');
    formData.append('contact', this.enseignant.contact ?? '');
  
    // Append the image file
    // Create a Blob from the data URI of the selected image URL
    fetch(this.selectedFileUrl)
      .then(response => response.blob())
      .then(blob => {
        // Append the Blob to FormData with the name 'image'
        formData.append('image', blob, 'image.jpg');
  
        // Send the FormData to the server
        this.enseignantService.addEnseignant(formData)
          .subscribe(
            response => {
              console.log(response);
              this.message = 'Enseignant added successfully';
              this.showSuccessMessage = true;
            },
            error => {
              console.error(error);
              this.message = 'Failed to add enseignant';
            }
          );
      })
      .catch(error => {
        console.error("Error fetching image:", error);
      });
  }
  
}
