import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './routing.module';
import { AppEntryComponent } from './app-entry/app-entry.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './components/header/header.component';
import { CoreModule } from './core/core.module';
import { SharedModule } from './shared/shared.module';
import { FooterComponent } from './components/footer/footer.component';
import { SideNavComponent } from './components/side-nav/side-nav.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { AboutPageComponent } from './components/about-page/about-page.component';
import { ContactPageComponent } from './components/contact-page/contact-page.component';
import { SettingsPageComponent } from './components/settings-page/settings-page.component';
import { TestPageComponent } from './components/test-page/test-page.component';
import { TestUsersPageComponent } from './components/test-users-page/test-users-page.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { TestMoreUsersPageComponent } from './components/test-more-users/test-more-users-page.component';
import { StoreModule } from '@ngrx/store';
import { reducers, metaReducers } from './ngrx/reducers';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { EffectsModule } from '@ngrx/effects';
import { TestUserEffects } from './ngrx/effects/test-user/test-user.effects';
import { SiteSettingsEffects } from './ngrx/effects/site-settings/site-settings.effects';

@NgModule({
  declarations: [
    AppEntryComponent,
    HeaderComponent,
    FooterComponent,
    SideNavComponent,
    HomePageComponent,
    AboutPageComponent,
    ContactPageComponent,
    SettingsPageComponent,
    TestPageComponent,
    TestUsersPageComponent,
    TestMoreUsersPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    CoreModule,
    SharedModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production }),
    //
    EffectsModule.forRoot([TestUserEffects, SiteSettingsEffects]),
    StoreModule.forRoot(reducers, { metaReducers }),
    !environment.production ? StoreDevtoolsModule.instrument() : []
  ],
  providers: [],
  bootstrap: [AppEntryComponent]
})
export class AppModule {}
