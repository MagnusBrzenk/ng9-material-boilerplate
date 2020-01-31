import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { provideMockStore, MockStore } from '@ngrx/store/testing';

import { TestMoreUsersPageComponent } from './test-more-users-page.component';
import { SharedModule } from '../../shared/shared.module';
import { AppState } from '../../ngrx/reducers';
import { Store } from '@ngrx/store';

describe('TestMoreUsersPageComponent', () => {
  let component: TestMoreUsersPageComponent;
  let fixture: ComponentFixture<TestMoreUsersPageComponent>;

  let store: MockStore<AppState>;
  const initialState: Partial<AppState> = { testUserSubstate: { testUsers: [] } };

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [SharedModule],
      declarations: [TestMoreUsersPageComponent],
      providers: [provideMockStore({ initialState })]
    }).compileComponents();
    store = TestBed.get<Store<any>>(Store);
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
