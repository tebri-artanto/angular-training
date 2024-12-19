import { AuthService } from './../../services/auth.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  standalone: false,
})
export class HeaderComponent implements OnInit {
  items: MenuItem[] | undefined;

  constructor(private router: Router, private authService: AuthService) {}

  ngOnInit() {
    this.items = [
      {
        label: 'Home',
        icon: 'pi pi-home',
        routerLink: [''],
      },
      {
        label: 'Pokemon List',
        icon: 'pi pi-star',
        routerLink: ['/pokemon'],
      },

      {
        label: 'History List',
        icon: 'pi pi-envelope',
        routerLink: ['/submission'],
      },
      {
        label: 'Logout',
        icon: 'pi pi-envelope',
        command: () =>this.logout()
      },
    ];
  }

  logout() {
    this.authService.logout();
    this.router.navigate(["/login"])
  }
}
