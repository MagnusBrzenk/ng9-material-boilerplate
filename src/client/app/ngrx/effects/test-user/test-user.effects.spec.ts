import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable } from 'rxjs';

import { TestUserEffects } from './test-user.effects';

describe('TestUserEffects', () => {
  let actions$: Observable<any>;
  let effects: TestUserEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TestUserEffects, provideMockActions(() => actions$)]
    });

    effects = TestBed.get<TestUserEffects>(TestUserEffects);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });
});
