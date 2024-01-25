import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PdfService {
  private storedPdf: File | null = null;
  constructor() { }

  storePdf(file: File) {
    if (file.type === '')
    this.storedPdf = file;
    console.log("PDF Stored: ", this.storedPdf);
  }

  getStoredPdf(): File | null {
    return this.storedPdf;
  }

}
