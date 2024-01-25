import { Component, ViewChild } from '@angular/core';

@Component({
  selector: 'app-upload-button',
  standalone: true,
  imports: [],
  templateUrl: './upload-button.component.html',
  styleUrl: './upload-button.component.css'
})
export class UploadButtonComponent {

  onFileSelected(event: any) {
    if (event) {
    console.log(event);
    const file: File = event.target.files.item(0);
    console.log(this.isPdf(file));
    }
  }

  isPdf(file: File) {
    console.log(file); 
    if (file) {
    return file.type === 'application/pdf';
    }
    return undefined;
  }
  
}
