import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable } from 'rxjs';

import { TestUserEffects } from './test-user.effects';
import { TestDataService } from 'src/client/app/core/services/test-data/test-data.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('TestUserEffects', () => {
  let actions$: Observable<any>;
  let effects: TestUserEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TestUserEffects, provideMockActions(() => actions$), TestDataService],
      imports: [HttpClientTestingModule]
    });
    // @ts-ignore:
    effects = TestBed.get<TestUserEffects>(TestUserEffects);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });
});
