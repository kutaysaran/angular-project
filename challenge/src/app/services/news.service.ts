import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class NewsService {

  constructor(private http: HttpClient,
              private router: Router) {}

  getTopHeadlines(): Observable<any> {
    return this.http.get('https://newsapi.org/v2/top-headlines?country=tr&apiKey=82652aa3319c448d99ab7daf301f7991');
  }
  getTopHeadlinesByCategory(): Observable<any> {
    const currentUrl = this.router.url;
    const category = currentUrl.split('/')[1];
    if (category) {
      return this.http.get(`https://newsapi.org/v2/top-headlines?country=tr&category=${category}&apiKey=82652aa3319c448d99ab7daf301f7991`);
    } else {
      return of(null);
    }
  
  }
  getTopHeadlinesByWord(word: string): Observable<any> {
    return this.http.get(`https://newsapi.org/v2/top-headlines?country=tr&q=${word}&apiKey=82652aa3319c448d99ab7daf301f7991`);
  }
}