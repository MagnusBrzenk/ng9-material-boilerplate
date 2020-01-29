import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { ITestUser, TestUser } from 'src/client/app/models/user.model';
import { TestDataService } from 'src/client/app/core/services/test-data/test-data.service';

@Component({
  selector: 'app-test-users-page',
  templateUrl: './test-users-page.component.html',
  styleUrls: ['./test-users-page.component.scss']
})
export class TestUsersPageComponent implements OnInit {
  //
  users: ITestUser[];

  constructor(private testData: TestDataService, private route: ActivatedRoute) {}

  ngOnInit() {
    // Extract userId from route extension
    const userId = this.route.snapshot.paramMap.get('id');

    this.testData.getUsers(userId || '').subscribe(data => {
      this.users = Array.isArray(data) ? data : [data];
    });
  }
}
