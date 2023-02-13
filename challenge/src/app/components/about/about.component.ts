import { Component, OnInit } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { Router } from '@angular/router';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  linkedinUrl="https://www.linkedin.com/in/kutay-saran-084406217/";

  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  navigate(){
    this.router.navigateByUrl(this.linkedinUrl);
  }
}
