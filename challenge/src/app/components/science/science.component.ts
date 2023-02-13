import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { NewsService } from 'src/app/services/news.service';
import { PageEvent } from '@angular/material/paginator';

@Component({
  selector: 'app-science',
  templateUrl: './science.component.html',
  styleUrls: ['./science.component.css']
})
export class ScienceComponent implements OnInit {
  topHeadlines$: Observable<any> = of(null) ;
  pageIndex = 0;
  private _countryCode: string = "TR";
  searchKey: string = "";
  countries: string[] = ['TR', 'MX', 'FR', 'GB', 'DE'];
  countryNames: { [key: string]: string } = {
    "TR": 'Turkey',
    "MX": 'Mexico',
    "FR": 'France',
    "GB": 'England',
    "DE": 'Germany'
};
  constructor(private newsService: NewsService) { }

  ngOnInit(): void {
    this.topHeadlines$ = this.newsService.getTopHeadlinesByFilter(this.countryCode, this.pageIndex+1, this.searchKey);
  }

  onCommentChange(searchKey: string) {
     this.searchKey = searchKey;
     this.topHeadlines$ = this.newsService.getTopHeadlinesByFilter(this.countryCode, this.pageIndex+1, this.searchKey);
    
  }

  onPageChange(event: PageEvent) {
  this.pageIndex = event.pageIndex;
  this.topHeadlines$ = this.newsService.getTopHeadlinesByFilter(this.countryCode, this.pageIndex+1,this.searchKey);
  }

  get countryCode(): string {
    return this._countryCode;
  }

  set countryCode(value: string) {
    this._countryCode = value;
    console.log(`Country code changed to ${value}`);
    this.topHeadlines$ = this.newsService.getTopHeadlinesByFilter(this.countryCode, this.pageIndex+1, this.searchKey);
  }
}
