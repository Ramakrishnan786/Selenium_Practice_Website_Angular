import { Injectable, PLATFORM_ID, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, of, throwError } from 'rxjs';
import { isPlatformBrowser } from '@angular/common';
import { LoginCredentials, LoginResponse } from '../interfaces/login.interface';
import { SignupCredentials, SignupResponse } from '../interfaces/signup.interface';
import { delay, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private readonly TOKEN_KEY = 'auth_token';
  private readonly VALID_EMAIL = 'seleniumautomation@gmail.com';
  private readonly VALID_PASSWORD = 'P@ssword@1234';
  private isAuthenticatedSubject = new BehaviorSubject<boolean>(false);
  public isAuthenticated$ = this.isAuthenticatedSubject.asObservable();
  private isBrowser: boolean;

  constructor(
    private http: HttpClient,
    @Inject(PLATFORM_ID) platformId: Object
  ) {
    this.isBrowser = isPlatformBrowser(platformId);
    this.checkInitialAuth();
  }

  private checkInitialAuth(): void {
    if (this.isBrowser) {
      const token = localStorage.getItem(this.TOKEN_KEY);
      this.isAuthenticatedSubject.next(!!token);
    }
  }

  private getStorageToken(): string | null {
    return this.isBrowser ? localStorage.getItem(this.TOKEN_KEY) : null;
  }

  private setStorageToken(token: string): void {
    if (this.isBrowser) {
      localStorage.setItem(this.TOKEN_KEY, token);
      this.isAuthenticatedSubject.next(true);
    }
  }

  private removeStorageToken(): void {
    if (this.isBrowser) {
      localStorage.removeItem(this.TOKEN_KEY);
      this.isAuthenticatedSubject.next(false);
    }
  }

  signup(credentials: SignupCredentials): Observable<SignupResponse> {
    // For demo purposes, we'll only allow the valid email
    if (credentials.email !== this.VALID_EMAIL) {
      return throwError(() => new Error('This email is not authorized for signup'));
    }

    const mockResponse: SignupResponse = {
      token: 'mock-jwt-token',
      user: {
        id: '1',
        email: credentials.email,
        firstName: credentials.firstName,
        lastName: credentials.lastName
      }
    };

    return of(mockResponse).pipe(
      delay(1000), // Simulate network delay
      tap((response: SignupResponse) => {
        this.setStorageToken(response.token);
      })
    );
  }

  login(credentials: LoginCredentials): Observable<LoginResponse> {
    // Check for valid credentials
    if (credentials.email !== this.VALID_EMAIL || 
        credentials.password !== this.VALID_PASSWORD) {
      return throwError(() => new Error('Invalid credentials'));
    }

    // Mock successful login response
    const mockResponse: LoginResponse = {
      token: 'mock-jwt-token',
      user: {
        id: '1',
        email: credentials.email,
        name: 'Selenium User'
      }
    };

    return of(mockResponse).pipe(
      delay(1000), // Simulate network delay
      tap((response: LoginResponse) => {
        this.setStorageToken(response.token);
      })
    );
  }

  logout(): void {
    this.removeStorageToken();
  }

  getToken(): string | null {
    return this.getStorageToken();
  }
}
