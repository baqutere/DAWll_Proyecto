import { Component, OnInit, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';


@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css'] // Cambié de 'styleUrl' a 'styleUrls'
})
export class NavBarComponent implements OnInit {
  isSidebarOpen = false;
  areCategoriesOpen = false;
  isLoginOpen = false;
  isPanelOpen = false;

  isAuthenticated = false;
  userName: string = 'Nombre del Usuario';
  userPhoto: string = 'assets/images/artesanias.jpg';

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  ngOnInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      if (sessionStorage.getItem('userSession') === null) {
        this.isAuthenticated = false;
      } else {
        this.userName = localStorage.getItem('userSession')!;
        this.isAuthenticated = true;
      }
    }
  }

  toggleSidebar() {
    this.isSidebarOpen = !this.isSidebarOpen;
  }

  toggleCategories(event: Event) {
    event.preventDefault();
    this.areCategoriesOpen = !this.areCategoriesOpen;
  }

  toggleLogin(event: Event) {
    event.preventDefault();
    this.isLoginOpen = !this.isLoginOpen;
  }

  togglePanel(event: Event) {
    event.preventDefault();
    this.isPanelOpen = !this.isPanelOpen;
  }
}
