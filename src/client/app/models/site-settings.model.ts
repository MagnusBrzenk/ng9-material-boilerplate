export interface ISiteSettings {
  siteTheme: TPermittedTheme;
  isPageAnimated: boolean;
}

// TS apparatus to convert an array of strings to a union of string types
// See: https://stackoverflow.com/a/52085658/8620332
function stringLiteralArray<T extends string>(s: T[]) {
  return s;
}

export const permittedThemes = stringLiteralArray([
  //
  'DARK-THEME',
  'LIGHT-THEME'
]);
export type TPermittedTheme = typeof permittedThemes[number];
