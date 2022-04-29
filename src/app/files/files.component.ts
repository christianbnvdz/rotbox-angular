import { Component, OnInit } from '@angular/core';

import { FileService } from '../file.service';

@Component({
  selector: 'app-files',
  templateUrl: './files.component.html',
  styleUrls: ['./files.component.css']
})
export class FilesComponent implements OnInit {
  files: any;

  constructor(private fileService: FileService) { }

  ngOnInit(): void {
    this.fileService.getFiles().subscribe(
      (resp) => {
        this.files = resp.files;
      }
    );
  }

  downloadFile(fileid: string, filename: string): void {
    this.fileService.downloadFile(fileid).subscribe(
      (blob) => {
        const blobUrl = window.URL.createObjectURL(blob);
        const a = document.createElement('a');

        a.href = blobUrl;
        a.download = filename;
        a.click();
        window.URL.revokeObjectURL(blobUrl);
      }
    );
  }
}
