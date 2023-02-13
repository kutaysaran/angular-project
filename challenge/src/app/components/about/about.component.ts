import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  name: string = "Kutay Saran"
  jobTitle="Frontend Web Developer";
  email="kutaysaranllc@gmail.com";
  phoneNumber="+90 535 860 6887";
  location="Istanbul";
  linkedinUrl="https://www.linkedin.com/in/kutay-saran-084406217/";
  githubUrl="https://github.com/kutaysaran";

  constructor() { }

  ngOnInit(): void {
  }

}
