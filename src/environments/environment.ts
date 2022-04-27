// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const baseUrl = 'http://localhost:3000';
const tokenLocalStorageName = 'token';
const useridLocalStorageName = 'userid';

export const environment = {
  production: false,
  loginUrl: `${baseUrl}/users/login`,
  registerUrl: `${baseUrl}/users/register`,
  authenticateTokenUrl: `${baseUrl}/users/authenticate`,
  constructGetFilesUrl(): string {
    return `${baseUrl}/users/${localStorage.getItem('userid')}/files`;
  },
  getUserToken(): string {
    return `${localStorage.getItem(tokenLocalStorageName)}`;
  },
  deleteUserToken(): void {
    localStorage.removeItem(tokenLocalStorageName);
  },
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
