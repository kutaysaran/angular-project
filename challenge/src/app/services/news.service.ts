import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NewsService {

  constructor(private http: HttpClient) {}

  getTopHeadlines(): Observable<any> {
    return this.http.get('https://newsapi.org/v2/top-headlines?country=tr&apiKey=676f017549224f488970f1835f9db971');
  }
}