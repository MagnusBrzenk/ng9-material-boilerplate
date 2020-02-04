import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppEntryComponent } from './app-entry.component';
import { MockStore, provideMockStore } from '@ngrx/store/testing';
import { AppState } from '../ngrx/reducers';
import { SharedModule } from '../shared/shared.module';
import { Store } from '@ngrx/store';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SideNavComponent } from '../components/side-nav/side-nav.component';
import { HeaderComponent } from '../components/header/header.component';
import { FooterComponent } from '../components/footer/footer.component';

describe('AppEntryComponent', () => {
  let store: MockStore<AppState>;
  const initialState: Partial<AppState> = {};

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule, SharedModule, BrowserAnimationsModule],
      declarations: [AppEntryComponent, SideNavComponent, HeaderComponent, FooterComponent],
      providers: [provideMockStore({ initialState })]
    }).compileComponents();
    // @ts-ignore:
    store = TestBed.get<Store<any>>(Store);
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppEntryComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  // it(`should have as title 'ng9-boilerplate'`, () => {
  //   const fixture = TestBed.createComponent(AppEntryComponent);
  //   const app = fixture.componentInstance;
  //   expect(app.title).toEqual('ng9-boilerplate');
  // });

  // it('should render title', () => {
  //   const fixture = TestBed.createComponent(AppEntryComponent);
  //   fixture.detectChanges();
  //   const compiled = fixture.nativeElement;
  //   expect(compiled.querySelector('.content span').textContent).toContain(
  //     'ng9-boilerplate app is running!'
  //   );
  // });
});
