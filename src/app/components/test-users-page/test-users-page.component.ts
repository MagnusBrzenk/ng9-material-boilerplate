import { Component, OnInit } from '@angular/core';

import { IUser } from 'src/app/models/user.model';
import { TestDataService } from 'src/app/modules/core/services/test-data.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-test-users-page',
  templateUrl: './test-users-page.component.html',
  styleUrls: ['./test-users-page.component.scss']
})
export class TestUsersPageComponent implements OnInit {
  //

  users: IUser[];

  constructor(private testData: TestDataService, private route: ActivatedRoute) {}

  ngOnInit() {
    // Extract userId from route extension
    const userId = this.route.snapshot.paramMap.get('id');

    this.testData.getUsers(userId || '').subscribe(data => {
      this.users = Array.isArray(data) ? data : [data];
    });
  }
}
