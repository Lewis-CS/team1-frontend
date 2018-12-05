import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { filter } from 'rxjs/operators';
import * as auth0 from 'auth0-js';
import { HttpClient } from '@angular/common/http';
import * as jwt_decode from 'jwt-decode';

(window as any).global = window;
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  auth0 = new auth0.WebAuth({
    clientID: 'Qnu--PquijnwVGjT8MQUg3jcdyu0ivE3',
    domain: 'yetube.auth0.com',
    responseType: 'token id_token',
    //redirectUri: 'http://142.93.122.253:4200/authorize',
    redirectUri: 'http://yetube.dockedfiles.com:88/authorize',
    scope: 'openid'
  });
  
  constructor(public router: Router, private http: HttpClient) { }
  public login(): void{
    this.auth0.authorize();
  }
  public handleAuthentication(): void {
    this.auth0.parseHash((err, authResult) => {
      if (authResult && authResult.accessToken && authResult.idToken) {
        window.location.hash = '';
        this.setSession(authResult);
      } else if (err) {
        this.router.navigate(['/home']);
        console.log(err);
      }
    });
  }

  private setSession(authResult): void {
    // Set the time that the Access Token will expire at
    const expiresAt = JSON.stringify((authResult.expiresIn * 1000) + new Date().getTime());
    
    localStorage.setItem('access_token', authResult.accessToken);
    localStorage.setItem('id_token', authResult.idToken);
    localStorage.setItem('expires_at', expiresAt);

    this.http.post('http://yetube.dockedfiles.com:8080/users', {authId: this.profile().sub }).subscribe(
      res => { console.log(res); }, 
      err => {}, 
      () => this.router.navigate(['/home'])
    );

  }
  public profile(): any{
    if(localStorage.getItem('id_token') !== null){
      return jwt_decode(localStorage.getItem('id_token'))
    }
    return null;
  }
  public logout(): void {
    // Remove tokens and expiry time from localStorage
    localStorage.removeItem('access_token');
    localStorage.removeItem('id_token');
    localStorage.removeItem('expires_at');
    // Go back to the home route
    this.auth0.logout({returnTo: 'http://yetube.dockedfiles.com:88/'});
    //this.router.navigate(['/']);
  }

  public isAuthenticated(): boolean {
    // Check whether the current time is past the
    // Access Token's expiry time
    const expiresAt = JSON.parse(localStorage.getItem('expires_at') || '{}');
    return new Date().getTime() < expiresAt;
  }
}
