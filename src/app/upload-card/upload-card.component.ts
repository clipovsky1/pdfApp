import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { UploadButtonComponent } from '../upload-button/upload-button.component';
import { SingleFileUploadComponent } from '../single-file-upload/single-file-upload.component';

@Component({
  selector: 'app-upload-card',
  standalone: true,
  imports: [ MatCardModule, UploadButtonComponent, SingleFileUploadComponent],
  templateUrl: './upload-card.component.html',
  styleUrl: './upload-card.component.css'
})
export class UploadCardComponent {

}
