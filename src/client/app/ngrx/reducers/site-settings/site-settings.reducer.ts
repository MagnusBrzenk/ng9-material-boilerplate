import { Action } from '@ngrx/store';
import { SiteSettingsActions, ESiteSettingsActionTypes } from '../../actions/site-settings.actions';
import { ISiteSettings } from 'src/client/app/models/site-settings.model';

export interface ISiteSettingsSubstate extends ISiteSettings {
  //
}

export const initialState: ISiteSettingsSubstate = {
  siteTheme: 'DARK-THEME',
  isPageAnimated: true
};

export function siteSettingsReducer(
  state = initialState,
  action: SiteSettingsActions
): ISiteSettingsSubstate {
  switch (action.type) {
    case ESiteSettingsActionTypes.SetSiteSettings:
      return {
        ...action.siteSettings
      };

    case ESiteSettingsActionTypes.SetSiteTheme:
      return {
        ...state,
        siteTheme: action.theme
      };

    default:
      return state;
  }
}
