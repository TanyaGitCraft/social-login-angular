// auth.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private clientId = 'e6a8bf2f7c564458a493';
  private redirectUri = 'http://localhost:57288';
  private githubApiUrl = 'https://github.com/login/oauth';

  constructor(private http: HttpClient) {}

  getAuthorizationUrl(): string {
    return `${this.githubApiUrl}/authorize?client_id=${this.clientId}&redirect_uri=${this.redirectUri}&scope=user`;
  }

  getToken(code: string): Observable<any> {
    const body = {
      client_id: this.clientId,
      client_secret: 'ab484a9113affd5e3905da99e58517246989f785',
      code: code,
     redirectUri:this.redirectUri
    };

    return this.http.post(`${this.githubApiUrl}/access_token`, body);
  }
}
