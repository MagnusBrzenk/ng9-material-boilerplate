import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestUsersPageComponent } from './test-users-page.component';

describe('TestUsersPageComponent', () => {
  let component: TestUsersPageComponent;
  let fixture: ComponentFixture<TestUsersPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestUsersPageComponent ]
    })
    .compileComponents();
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
