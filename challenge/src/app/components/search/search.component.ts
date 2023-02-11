import { Component, OnInit } from '@angular/core';
import { NewsService } from 'src/app/services/news.service';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  topHeadlines$: Observable<any> = of(null) ;
  word: any;
  constructor(private newsService: NewsService) { }

  ngOnInit(): void {
    this.topHeadlines$ = this.newsService.getTopHeadlines();
  }

  searchByWord(){
    this.topHeadlines$ = this.newsService.getTopHeadlinesByWord(this.word);
  }
}
