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

  downloadFile(): void {

  }
}
