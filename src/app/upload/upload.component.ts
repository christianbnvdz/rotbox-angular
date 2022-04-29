import { Component, OnInit } from '@angular/core';

import { FileService } from '../file.service';

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.css']
})
export class UploadComponent implements OnInit {
  file = { name: '', isFile: false, content: '' };
  fd: any = null;
  msg = '';

  constructor(private fileService: FileService) { }

  ngOnInit(): void {

  }

  onFileSelect(event: any) {
    this.fd = event.target.files[0];
  }

  clearContent() {
    this.file.content = '';
  }

  uploadFile() {
    const form = new FormData();
    form.append('name', this.file.name);
    form.append('isFile', (this.file.isFile) ? 'true' : 'false');
    form.append('content', (this.file.isFile) ? this.fd : this.file.content);

    this.fileService.uploadFile(form).subscribe(
      (data) => {
        let fileSelectElement = document.getElementById('fileSelect');
        this.file.name = '';
        this.file.content = '';
        if (fileSelectElement) (fileSelectElement as any).value = null;
        this.msg = 'File upload successful!';
      }
    );
  }
}
