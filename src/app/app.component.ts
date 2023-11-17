import { AfterViewInit, ChangeDetectorRef, Component } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
// import { ProjectQuery } from './@core/state/project/project.query';
import { ProjectQuery } from './layouts/project/state/project/project.query';
import { ProjectService } from './layouts/project/state/project/project.service';
import { GoogleAnalyticsService } from './@core/services/google-analytics.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit {
  title = 'rah-ticketing';
  date: Date | undefined;
  expanded: boolean;
  selectedValues: string[] = [];
  constructor(
    public router: Router,
    public projectQuery: ProjectQuery,
    private _cdr: ChangeDetectorRef,
    private _projectService: ProjectService,
    private _googleAnalytics: GoogleAnalyticsService
  ) {
    this._projectService.setLoading(true);

    if (environment.production) {
      this.router.events.subscribe(this.handleGoogleAnalytics);
    }
  }

  handleGoogleAnalytics = (event: any): void => {
    if (event instanceof NavigationEnd) {
      this._googleAnalytics.sendPageView(event.urlAfterRedirects);
    }
  };

  ngAfterViewInit() {
    this._cdr.detectChanges();
  }
  manualToggle() {
    this.expanded = !this.expanded;
  }
}
