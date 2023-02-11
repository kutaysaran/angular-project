import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { NewsService } from 'src/app/services/news.service';

@Component({
  selector: 'app-general',
  templateUrl: './general.component.html',
  styleUrls: ['./general.component.css']
})
export class GeneralComponent implements OnInit {
  topHeadlines$: Observable<any> = of(null) ;
  constructor(private newsService: NewsService) { }

  ngOnInit(): void {
    this.topHeadlines$ = this.newsService.getTopHeadlinesByCategory();
  }

}