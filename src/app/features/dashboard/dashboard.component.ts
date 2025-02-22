import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AuthService } from '../auth/services/auth.service';
import { Router } from '@angular/router';
import { NavMenuComponent } from '../../core/components/nav-menu/nav-menu.component';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, RouterModule, NavMenuComponent],
  template: `
    <div class="dashboard-container">
      <header class="dashboard-header">
        <h1>Selenium Automation Dashboard</h1>
        <button class="logout-button" (click)="logout()">Logout</button>
      </header>
      
      <app-nav-menu></app-nav-menu>

      <main class="dashboard-content">
        <router-outlet></router-outlet>
        
        <div class="welcome-card" *ngIf="!isSubRoute()">
          <h2>Welcome to Selenium Automation</h2>
          <p>You have successfully logged in to the automation dashboard.</p>
        </div>

        <div class="stats-grid" *ngIf="!isSubRoute()">
          <div class="stat-card">
            <h3>Test Suites</h3>
            <p class="stat-number">12</p>
          </div>
          <div class="stat-card">
            <h3>Test Cases</h3>
            <p class="stat-number">48</p>
          </div>
          <div class="stat-card">
            <h3>Success Rate</h3>
            <p class="stat-number">95%</p>
          </div>
        </div>
      </main>
    </div>
  `,
  styles: [`
    .dashboard-container {
      min-height: 100vh;
      background-color: #f5f5f5;
    }

    .dashboard-header {
      background-color: #00AC55;
      color: white;
      padding: 1rem 2rem;
      display: flex;
      justify-content: space-between;
      align-items: center;
      box-shadow: 0 2px 4px rgba(0,0,0,0.1);
    }

    .logout-button {
      background-color: transparent;
      border: 2px solid white;
      color: white;
      padding: 0.5rem 1rem;
      border-radius: 4px;
      cursor: pointer;
      transition: all 0.3s ease;

      &:hover {
        background-color: white;
        color: #00AC55;
      }
    }

    .dashboard-content {
      padding: 2rem;
      max-width: 1200px;
      margin: 0 auto;
    }

    .welcome-card {
      background-color: white;
      border-radius: 8px;
      padding: 2rem;
      margin-bottom: 2rem;
      box-shadow: 0 2px 4px rgba(0,0,0,0.05);

      h2 {
        color: #00AC55;
        margin: 0 0 1rem;
      }

      p {
        color: #666;
        margin: 0;
      }
    }

    .stats-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
      gap: 1.5rem;
    }

    .stat-card {
      background-color: white;
      border-radius: 8px;
      padding: 1.5rem;
      text-align: center;
      box-shadow: 0 2px 4px rgba(0,0,0,0.05);
      transition: transform 0.3s ease;

      &:hover {
        transform: translateY(-5px);
      }

      h3 {
        color: #666;
        margin: 0 0 0.5rem;
        font-size: 1.1rem;
      }

      .stat-number {
        color: #00AC55;
        font-size: 2rem;
        font-weight: bold;
        margin: 0;
      }
    }
  `]
})
export class DashboardComponent {
  constructor(
    private authService: AuthService,
    private router: Router
  ) {}

  logout(): void {
    this.authService.logout();
    this.router.navigate(['/login']);
  }

  isSubRoute(): boolean {
    return this.router.url !== '/dashboard';
  }
}
