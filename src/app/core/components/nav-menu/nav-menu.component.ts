import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-nav-menu',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <nav class="nav-menu">
      <div class="menu-item" [class.active]="isActive('clicks')" (mouseenter)="toggleSubmenu('clicks')">
        <span>Clicks in Selenium</span>
         <div class="submenu" *ngIf="activeMenu === 'clicks'">
          <a routerLink="single-click" routerLinkActive="active">Single Click</a>
          <a routerLink="double-click" routerLinkActive="active">Double Click</a>
          <a routerLink="right-click" routerLinkActive="active">Right Click</a>
          <a routerLink="drag-drop" routerLinkActive="active">Drag and Drop</a>
         </div>

       

      </div>
    </nav>
  `,
  styles: [`
    .nav-menu {
      background: #2c3e50;
      padding: 0 20px;
      height: 50px;
      display: flex;
      align-items: center;
      box-shadow: 0 2px 4px rgba(0,0,0,0.1);
    }

    .menu-item {
      position: relative;
      color: white;
      padding: 15px 20px;
      cursor: pointer;
      transition: background-color 0.3s;

      &:hover {
        background-color: #34495e;
      }

      &.active {
        background-color: #34495e;
      }

      span {
        font-size: 15px;
      }
    }

    .submenu {
      position: absolute;
      top: 100%;
      left: 0;
      background: white;
      min-width: 200px;
      box-shadow: 0 2px 10px rgba(0,0,0,0.1);
      border-radius: 4px;
      overflow: hidden;
      z-index: 1000;

      a {
        display: block;
        padding: 12px 20px;
        color: #2c3e50;
        text-decoration: none;
        transition: background-color 0.3s;

        &:hover {
          background-color: #f5f6fa;
          color: #00AC55;
        }

        &.active {
          background-color: #00AC55;
          color: white;
        }
      }
    }
  `]
})
export class NavMenuComponent {
  activeMenu: string | null = null;

  toggleSubmenu(menu: string): void {
    this.activeMenu = this.activeMenu === menu ? null : menu;
  }

  isActive(menu: string): boolean {
    return this.activeMenu === menu;
  }
}
