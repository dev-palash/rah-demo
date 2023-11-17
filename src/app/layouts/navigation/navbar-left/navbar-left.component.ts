import { Component, OnInit } from '@angular/core';
// import { AuthQuery } from '@trungk18/feature-modules/project/auth/auth.query';
import { AuthQuery } from '../../project/auth/auth.query';
import { NzDrawerService } from 'ng-zorro-antd/drawer';
// import { SearchDrawerComponent } from '../../search/search-drawer/search-drawer.component';
import { SearchDrawerComponent } from '../../project/components/search/search-drawer/search-drawer.component';
import { NzModalService } from 'ng-zorro-antd/modal';
// import { AddIssueModalComponent } from '../../add-issue-modal/add-issue-modal.component';
import { AddIssueModalComponent } from '../../project/components/add-issue-modal/add-issue-modal.component';

@Component({
  selector: 'app-navbar-left',
  templateUrl: './navbar-left.component.html',
  styleUrls: ['./navbar-left.component.scss']
})
export class NavbarLeftComponent implements OnInit {
  items: string[] = ['search', 'plus'];
  constructor(
    public authQuery: AuthQuery,
    private _drawerService: NzDrawerService,
    private _modalService: NzModalService
  ) {}

  ngOnInit(): void {
    // this.items = [
    //   new NavItem('search', 'Search issues', this.openSearchDrawler.bind(this)),
    //   new NavItem('plus', 'Create issue', this.openCreateIssueModal.bind(this))
    // ];
  }

  openCreateIssueModal() {
    this._modalService.create({
      nzContent: AddIssueModalComponent,
      nzClosable: false,
      nzFooter: null,
      nzWidth: 700
    });
  }

  openSearchDrawler() {
    this._drawerService.create({
      nzContent: SearchDrawerComponent,
      nzTitle: null,
      nzPlacement: 'left',
      nzClosable: false,
      nzWidth: 500
    });
  }
  onClickSidebarIcon(type: any){
    type === 'plus' ? this.openCreateIssueModal() : this.openSearchDrawler();
  }
}

class NavItem {
  constructor(public icon: string, public tooltip: string, public handler: Handler) {}
}

type Handler = () => void;
