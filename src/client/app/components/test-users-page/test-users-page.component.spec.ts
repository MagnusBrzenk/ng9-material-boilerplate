import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestUsersPageComponent } from './test-users-page.component';
import { SharedModule } from '../../shared/shared.module';
import { HttpTestingController, HttpClientTestingModule } from '@angular/common/http/testing';
import { AppRoutingModule } from '../../routing.module';

describe('TestUsersPageComponent', () => {
  let component: TestUsersPageComponent;
  let fixture: ComponentFixture<TestUsersPageComponent>;

  let httpTestingController: HttpTestingController;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [SharedModule, HttpClientTestingModule, AppRoutingModule],

      declarations: [TestUsersPageComponent]
    }).compileComponents();

    // @ts-ignore:
    httpTestingController = TestBed.get(HttpTestingController);
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestUsersPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
