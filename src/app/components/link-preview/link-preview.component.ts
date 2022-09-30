import { Component, OnInit } from '@angular/core';
import { LinkPreviewService } from 'src/app/services/link-preview/link-preview.service';

@Component({
  selector: 'app-link-preview',
  templateUrl: './link-preview.component.html',
  styleUrls: ['./link-preview.component.scss'],
})
export class LinkPreviewComponent implements OnInit {
  url = '';
  result!: any;
  constructor(private linkPreview: LinkPreviewService) {}

  ngOnInit(): void {}

  search() {
    if (this.url && this.url.length) {
      this.linkPreview.lookup(this.url).subscribe({
        next: (value) => {
          this.result = value;
        },
        error: (e) => console.log(e),
      });
    }
  }
}
