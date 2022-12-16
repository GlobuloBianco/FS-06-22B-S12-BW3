import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AddPostComponent } from './components/add-post/add-post.component';
import { AuthGuard } from './auth/auth.guard';
import { PostComponent } from './components/posts/post.component';
import { DettagliPostComponent } from './components/dettagli-post/dettagli-post.component';
import { EditPostComponent } from './components/edit-post/edit-post.component';
import { AuthModule } from './auth/auth.module';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { PrimiPiattiComponent } from './components/primi-piatti/primi-piatti.component';
import { SecondiPiattiComponent } from './components/secondi-piatti/secondi-piatti.component';
import { AntipastiComponent } from './components/antipasti/antipasti.component';
import { DolciComponent } from './components/dolci/dolci.component';

const routes: Routes = [
    {
        path: "",
        component: HomeComponent,
        children: [
            {
                path: "addPost",
                component: AddPostComponent
            }
        ],
        canActivate: [AuthGuard]
    },
    {
        path: "login",
        component: LoginComponent
    },
    {
        path: "register",
        component: RegisterComponent
    },
    {
        path: "post",
        component: PostComponent,
        canActivate: [AuthGuard]
    },
    {
        path: "dettagli/:id",
        component: DettagliPostComponent
    },
    {
        path: "edit/:id",
        component: EditPostComponent
    },
    {
        path: "antipasti",
        component: AntipastiComponent
    },
    {
        path: "primiPiatti",
        component: PrimiPiattiComponent
    },
    {
        path: "secondiPiatti",
        component: SecondiPiattiComponent
    },
    {
        path: "dolci",
        component: DolciComponent
    },
    {
        path: "**",
        redirectTo: ""
    }
];

@NgModule({
  imports: [
    BrowserModule,
    AuthModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
],
  exports: [RouterModule]
})
export class AppRoutingModule { }
