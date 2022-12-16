import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth/auth.service';
import { NgForm } from '@angular/forms';

@Component({
    selector: 'app-register',
    templateUrl: './register.component.html',
    styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

    isLoading = false;

    constructor(private authSrv: AuthService, private router:Router) { }

    ngOnInit(): void {
    }

    async onsubmit(form: NgForm) {
        this.isLoading = true
        console.log(form.value)
        try {
            await this.authSrv.registration(form.value).toPromise()
            this.router.navigate(['/login']);
        } catch (error) {
            this.isLoading = false
            console.error(error)
        }
    }
}
