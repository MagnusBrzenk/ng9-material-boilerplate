import { ISiteSettings } from './site-settings.model';

export interface ILocalStorageState extends ISiteSettings {
  testKey?: string;
}
