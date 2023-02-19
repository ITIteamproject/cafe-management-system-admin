import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../login/auth.service';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css'],
})
export class ToolbarComponent {
  constructor(private auth: AuthService , private router:Router){}
  logout() {
    this.auth.Logout();
    localStorage.removeItem('token');
    this.router.navigateByUrl('/login');
  }
}
