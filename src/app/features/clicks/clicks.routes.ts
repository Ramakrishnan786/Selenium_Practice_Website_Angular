import { Routes } from '@angular/router';
import { SingleClickComponent } from './components/single-click/single-click.component';
import { DoubleClickComponent } from './components/double-click/double-click.component';
import { RightClickComponent } from './components/right-click/right-click.component';
import { DragDropComponent } from './components/drag-drop/drag-drop.component';

export const CLICKS_ROUTES: Routes = [
  { path: 'single-click', component: SingleClickComponent },
  { path: 'double-click', component: DoubleClickComponent },
  { path: 'right-click', component: RightClickComponent },
  { path: 'drag-drop', component: DragDropComponent },
  { path: '', redirectTo: 'double-click', pathMatch: 'full' }
];
