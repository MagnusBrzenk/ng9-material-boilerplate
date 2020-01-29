import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppEntryComponent } from './app-entry.component';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [AppEntryComponent]
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppEntryComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'ng9-boilerplate'`, () => {
    const fixture = TestBed.createComponent(AppEntryComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('ng9-boilerplate');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(AppEntryComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('.content span').textContent).toContain(
      'ng9-boilerplate app is running!'
    );
  });
});
