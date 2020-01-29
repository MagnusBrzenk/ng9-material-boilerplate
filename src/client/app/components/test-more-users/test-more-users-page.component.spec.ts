import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestMoreUsersPageComponent } from './test-more-users-page.component';

describe('TestMoreUsersPageComponent', () => {
  let component: TestMoreUsersPageComponent;
  let fixture: ComponentFixture<TestMoreUsersPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TestMoreUsersPageComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestMoreUsersPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
