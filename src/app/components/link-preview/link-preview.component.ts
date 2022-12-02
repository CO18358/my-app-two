import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { LinkPreviewService } from 'src/app/services/link-preview/link-preview.service';

@Component({
  selector: 'app-link-preview',
  templateUrl: './link-preview.component.html',
  styleUrls: ['./link-preview.component.scss'],
})
export class LinkPreviewComponent implements OnInit {
  url = '';
  result!: any;
  constructor(
    private linkPreview: LinkPreviewService,
    private toastr: ToastrService
  ) {}

  ngOnInit(): void {}

  search() {
    if (this.url && this.url.length) {
      this.linkPreview.lookup(this.url).subscribe({
        next: (value) => {
          this.result = value;
        },
        error: (e) => {
          this.toastr.error("That didn't work. Try a Different URL.");
        },
      });
    }
  }
}
