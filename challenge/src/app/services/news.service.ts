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
    console.log("pageIndex",pageIndex);
    console.log("word",word)
    return this.http.get(`https://newsapi.org/v2/top-headlines?country=tr&q=${word}&apiKey=9380ef19d6d1496cbd53c1e520e5edd2&page=${pageIndex}`);
  }
  getTopHeadlinesByFilter(countryCode: string, pageIndex: number, word: string ): Observable<any> {
    const currentUrl = this.router.url;
    const category = currentUrl.split('/')[1];
    console.log("pageIndex",pageIndex);
    console.log("word",word);
    console.log("category",category);
    console.log("countryCode",countryCode);
    return this.http.get(`https://newsapi.org/v2/top-headlines?country=${countryCode}&q=${word}&category=${category}&apiKey=9380ef19d6d1496cbd53c1e520e5edd2&page=${pageIndex}`);
  }
}