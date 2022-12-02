import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class LinkPreviewService {
  basicUrl = 'http://api.linkpreview.net/';
  apiKey = environment.link_preview_api_key;
  constructor(private http: HttpClient) {}

  lookup(url: string) {
    return this.http.get(`${this.basicUrl}?key=${this.apiKey}&q=${url}`);
  }
}
