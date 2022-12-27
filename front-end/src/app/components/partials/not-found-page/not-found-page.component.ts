import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-not-found-page',
  templateUrl: './not-found-page.component.html',
  styleUrls: ['./not-found-page.component.css']
})
export class NotFoundPageComponent implements OnInit {

  @Input() visible = false;
  @Input() notFoundMessage = 'Not found';
  @Input() resetLinkText = 'Reset';
  @Input() resetLinkRoute = '/';

  constructor() { }

  ngOnInit(): void {
  }

}
