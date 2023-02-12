import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { NewsService } from 'src/app/services/news.service';
@Component({
  selector: 'app-sports',
  templateUrl: './sports.component.html',
  styleUrls: ['./sports.component.css']
})
export class SportsComponent implements OnInit {
  topHeadlines$: Observable<any> = of(null) ;
  constructor(private newsService: NewsService) { }

  ngOnInit(): void {
    // this.topHeadlines$ = this.newsService.getTopHeadlinesByCategory();
  }

}
