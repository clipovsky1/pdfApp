import { Component } from '@angular/core';
import { MatButton } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { PdfService } from '../pdf.service';
 
@Component({
  selector: 'app-single-file-upload',
  standalone: true,
  imports: [ MatButton, MatIconModule ],
  templateUrl: './single-file-upload.component.html',
  styleUrl: './single-file-upload.component.css'
  
})
export class SingleFileUploadComponent {
  private selectedFile: File | null = null;

  constructor(private pdfService: PdfService) {}

  fileSelect(event: Event): void {
    const inputElement = event.currentTarget as HTMLInputElement;
    
    if (!inputElement.files || inputElement.files.length === 0) {
      console.error('No file selected');
      return;
    }

    const file = inputElement.files[0];
    
    if (!this.isPDF(file)) {
      console.error('Invalid file format');
      return;
    }

    this.selectedFile = file;
    console.log('Selected file: ', this.selectedFile);
    this.pdfService.storePdf(this.selectedFile);
  }

  private isPDF(file: File): boolean {
    return file.type === 'application/pdf';
  }
}