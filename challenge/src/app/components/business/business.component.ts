import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { NewsService } from 'src/app/services/news.service';
import { PageEvent } from '@angular/material/paginator';

@Component({
  selector: 'app-business',
  templateUrl: './business.component.html',
  styleUrls: ['./business.component.css']
})
export class BusinessComponent implements OnInit {
  topHeadlines$: Observable<any> = of(null) ;
  pageIndex = 0;
  countryCode: string = "tr";
  word: string = "";
  constructor(private newsService: NewsService) { }

  ngOnInit(): void {
    this.topHeadlines$ = this.newsService.getTopHeadlinesByFilter(this.countryCode, this.pageIndex+1, this.word);
    this.topHeadlines$.subscribe(topheadline => console.log(topheadline.articles));
  }

  onPageChange(event: PageEvent) {
  this.pageIndex = event.pageIndex;
  this.topHeadlines$ = this.newsService.getTopHeadlinesByFilter(this.countryCode, this.pageIndex+1,this.word);
  this.topHeadlines$.subscribe(topheadline => console.log(topheadline.articles));
  }

}
