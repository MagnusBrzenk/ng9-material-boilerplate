import { Component, OnInit } from '@angular/core';
import { faCheckSquare, faSpinner, faSquare } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-test-page',
  templateUrl: './test-page.component.html',
  styleUrls: ['./test-page.component.scss']
})
export class TestPageComponent implements OnInit {
  faCheckSquare = faCheckSquare;
  faSpinner = faSpinner;
  faSquare = faSquare;

  constructor() {}

  ngOnInit() {}
}
