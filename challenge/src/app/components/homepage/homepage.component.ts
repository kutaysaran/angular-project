import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NewsService } from 'src/app/services/news.service';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {
  topHeadlines$: Observable<any> = of(null) ;
  constructor(private newsService: NewsService) { }

  ngOnInit(): void {
    this.topHeadlines$ = this.newsService.getTopHeadlines();
    
  }

}
