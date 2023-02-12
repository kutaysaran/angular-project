import { Component, OnInit } from '@angular/core';
import { NewsService } from 'src/app/services/news.service';
import { Observable, of } from 'rxjs';
import { PageEvent } from '@angular/material/paginator';


@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {
  topHeadlines$: Observable<any> = of(null) ;
  pageIndex = 0;
  word: string = "";
  constructor(private newsService: NewsService) {
    }

  ngOnInit(): void {
    this.topHeadlines$ = this.newsService.getTopHeadlines(this.pageIndex+1,this.word);
    this.topHeadlines$.subscribe(headline => console.log(headline.articles));
  }
  onPageChange(event: PageEvent) {
  this.pageIndex = event.pageIndex;
  this.topHeadlines$ = this.newsService.getTopHeadlines(this.pageIndex + 1,this.word);
  this.topHeadlines$.subscribe(headline => console.log(headline.articles));
  }


}
