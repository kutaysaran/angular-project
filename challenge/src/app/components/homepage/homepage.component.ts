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
  searchKey: string = "";
  constructor(private newsService: NewsService) {
    }

  ngOnInit(): void {
    this.topHeadlines$ = this.newsService.getTopHeadlines(this.pageIndex+1,this.searchKey);
  }
  onPageChange(event: PageEvent) {
  this.pageIndex = event.pageIndex;
  this.topHeadlines$ = this.newsService.getTopHeadlines(this.pageIndex + 1,this.searchKey);
  }

  onCommentChange(searchKey: string) {
     this.searchKey = searchKey;
     this.topHeadlines$ = this.newsService.getTopHeadlines(this.pageIndex + 1,this.searchKey);
    
  }


}
