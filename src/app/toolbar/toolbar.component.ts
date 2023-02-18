import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css'],
})
export class ToolbarComponent {
  selectedTabIndex = 2;
  OnSubmit(f: NgForm) {
    console.log(f.value);
    const reg = f.value;

    // this.serve
    //   .register(
    //     reg.username,
    //     reg.email,
    //     reg.password,
    //     reg.repassword,
    //     reg.gender
    //   )
    //   .subscribe({
    //     next: (res) => {
    //       this.router.navigateByUrl('/home');
    //     },
    //   });
  }
}
