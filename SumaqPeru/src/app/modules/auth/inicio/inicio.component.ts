import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {
  username: string | null = '';

  ngOnInit(): void {
    this.username = localStorage.getItem('username');
  }

  logout(): void {
    localStorage.removeItem('username');
    // Optional: Redirect to login page or another action
  }
}
