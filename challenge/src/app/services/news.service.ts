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

  getTopHeadlines(pageIndex: number, word: string): Observable<any> {
    return this.http.get(`https://newsapi.org/v2/top-headlines?country=tr&q=${word}&apiKey=9415a201cd9d46c985524ed89d13b4df&page=${pageIndex}`);
  }
  getTopHeadlinesByFilter(countryCode: string, pageIndex: number, word: string ): Observable<any> {
    const currentUrl = this.router.url;
    const category = currentUrl.split('/')[1];
    return this.http.get(`https://newsapi.org/v2/top-headlines?country=${countryCode}&q=${word}&category=${category}&apiKey=9415a201cd9d46c985524ed89d13b4df&page=${pageIndex}`);
  }
}