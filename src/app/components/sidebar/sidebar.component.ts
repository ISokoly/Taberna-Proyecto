import { Component } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  imports: [],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent    {
  isSidebarOpen: boolean = false;

  
  openSidebar() {
    this.isSidebarOpen = true;
  };

  closeSidebar() {
    this.isSidebarOpen = false;
  };
  
}
