import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { AuthService } from './auth.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  constructor(private serve: AuthService, private router: Router) {}
  ngOnInit(): void {}

  OnSubmit(f: NgForm) {
    const reg = f.value;
    console.log(reg);
    this.serve
      .register(
        reg.username,
        reg.email,
        reg.password,
        reg.repassword,
        reg.gender
      )
      .subscribe({
        next: (res) => {
          console.log('ok');
          this.router.navigateByUrl('/admin');
        },
      });
  }

  login(x: NgForm) {
    const y = x.value;
    this.serve.login(y.email, y.password).subscribe((res) => {
      console.log(res);
      localStorage.setItem('token', res.accessToken);
      localStorage.setItem('logged', 'true');
      this.router.navigateByUrl('/admin');
    }, error => {
      
      this.test();
    });
  }
  test() {
    if (!this.serve.checkAuth()) {
      Swal.fire('Login Failed', 'Your Email or password is incorrect', 'error');
    }
  }
  logOut() {
    // this.serve.logOut().subscribe();
    localStorage.removeItem('token');
    this.router.navigateByUrl('/login');
  }
}
