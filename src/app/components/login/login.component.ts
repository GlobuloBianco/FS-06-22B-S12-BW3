import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth/auth.service';
import { NgForm } from '@angular/forms';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

    isLoading = false

    constructor(private authSrv: AuthService, private router: Router) { }

    ngOnInit(): void {
    }

    async login(form: NgForm) {
        this.isLoading = true
        try {
          await this.authSrv.login(form.value).toPromise()
          this.router.navigate(['']);
        } catch (error) {
            this.isLoading = false
            console.error(error)
        }
      }

}
