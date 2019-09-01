import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-choose-topics-page',
  templateUrl: './choose-topics-page.component.html',
  styleUrls: ['./choose-topics-page.component.css']
})
export class ChooseTopicsPageComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  save() {
    this.router.navigate(['']);
  }

  back() {
    this.router.navigate(['']);
  }
}
