import { Component, ViewContainerRef } from '@angular/core';


@Component({
  selector: 'app-lazyloadingcomponent',
  templateUrl: './lazyloadingcomponent.component.html',
  styleUrls: ['./lazyloadingcomponent.component.css']
})
export class LazyloadingcomponentComponent {
  constructor(private viewContainerRef: ViewContainerRef){}
  async loadAdminList(){
    this.viewContainerRef.clear();
    const { AdminListComponent } = await import('../admin-list/admin-list.component');
    this.viewContainerRef.createComponent(AdminListComponent);
  }

  async loadUserList(){
     this.viewContainerRef.clear();
     const {UserListComponent} = await import('../user-list/user-list.component');
     this.viewContainerRef.createComponent(UserListComponent);
  }
}
