import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent {
  @Input()
  expanded: boolean = false;
  project: any = {
    name: 'Rah-Ticketing',
    category: 'Ticketing System',
  };
  sideBarLinks: any = [
    {
      name: 'Kanban Board',
      icon: 'board',
      url: 'board',
      child: [],
    },
    {
      name: 'Kanban Board',
      icon: 'board',
      url: 'board',
      child: [],
    },
    {
      name: 'Master',
      icon: 'board',
      url: 'board',
      child: [
        {
          name: 'projects',
          icon: 'board',
          url: 'board',
        },
        {
          name: 'users',
          icon: 'board',
          url: 'board',
        },
      ],
    },
    {
      name: 'Kanban Board',
      icon: 'board',
      url: 'board',
      child: [],
    },
    {
      name: 'Kanban Board',
      icon: 'board',
      url: 'board',
      child: [],
    },

    {
      name: 'Kanban Board',
      icon: 'board',
      url: 'board',
      child: [],
    },
  ];
  constructor(private router: Router) {}
  get sidebarWidth(): number {
    return this.expanded ? 240 : 15;
  }
  showMasterDetail(name: any) {
    if (name == 'Users') {
      this.router.navigate(['/master/users']);
    } else {
      this.router.navigate(['/master/projects']);
    }
  }
}
