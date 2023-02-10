import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of, switchMap } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class NewsService {

  constructor(private http: HttpClient,
              private router: Router) {}

  getTopHeadlines(): Observable<any> {
    return this.http.get('https://newsapi.org/v2/top-headlines?country=tr&apiKey=676f017549224f488970f1835f9db971');
  }
  getTopHeadlinesByCategory(): Observable<any> {
    const currentUrl = this.router.url;
    const category = currentUrl.split('/')[1];
    if (category) {
      return this.http.get(`https://newsapi.org/v2/top-headlines?country=tr&category=${category}&apiKey=676f017549224f488970f1835f9db971`);
    } else {
      return of(null);
    }
  
}
}