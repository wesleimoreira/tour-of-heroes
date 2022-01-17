import { Component } from '@angular/core';
import { MenuItem } from './core/models/menu-item.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'tour Of Heroes';
  menuItems: MenuItem[] = [
    {
      icon: 'dashboard',
      toolTipText: 'Dashboard',
      routerLinkText: '/dashboard',
    },
    {
      icon: 'sports_martial_arts',
      toolTipText: 'Heroes',
      routerLinkText: '/heroes',
    },
  ];
}
