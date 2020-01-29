import { Action } from '@ngrx/store';
import { ISiteSettingsSubstate } from '../reducers/site-settings/site-settings.reducer';
import { TPermittedTheme } from '../../models/site-settings.model';

export enum ESiteSettingsActionTypes {
  SetSiteSettings = '[SiteSettings] Set SiteSettings',
  SetSiteTheme = '[SiteSettings] Set SiteTheme',
  SetIsPageAnimated = '[SiteSettings] Set IsPageAnimated',
  LoadSiteSettingsFromLocalStorage = '[SiteSettings] Load SiteSettings From LocalStorage'
}

export class SetSiteSettings implements Action {
  readonly type = ESiteSettingsActionTypes.SetSiteSettings;
  constructor(public siteSettings: ISiteSettingsSubstate) {}
}

export class SetSiteTheme implements Action {
  readonly type = ESiteSettingsActionTypes.SetSiteTheme;
  constructor(public theme: TPermittedTheme) {}
}

export class SetIsPageAnimated implements Action {
  readonly type = ESiteSettingsActionTypes.SetIsPageAnimated;
  constructor(public isPageAnimated: boolean) {}
}

export class LoadSiteSettingsFromLocalStorage implements Action {
  readonly type = ESiteSettingsActionTypes.LoadSiteSettingsFromLocalStorage;
  constructor() {}
}

export type SiteSettingsActions =
  | SetSiteSettings
  | SetSiteTheme
  | SetIsPageAnimated
  | LoadSiteSettingsFromLocalStorage;
