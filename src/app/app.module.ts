import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';;
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { PostComponent } from './components/posts/post.component';
import { HomeComponent } from './components/home/home.component';
import { DettagliPostComponent } from './components/dettagli-post/dettagli-post.component';
import { AddPostComponent } from './components/add-post/add-post.component';
import { EditPostComponent } from './components/edit-post/edit-post.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FooterComponent } from './components/footer/footer.component';
import { PrimiPiattiComponent } from './components/primi-piatti/primi-piatti.component';
import { SecondiPiattiComponent } from './components/secondi-piatti/secondi-piatti.component';
import { AntipastiComponent } from './components/antipasti/antipasti.component';
import { DolciComponent } from './components/dolci/dolci.component';
import { CardHomeComponent } from './components/card-home/card-home.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    PostComponent,
    HomeComponent,
    DettagliPostComponent,
    AddPostComponent,
    EditPostComponent,
    FooterComponent,
    PrimiPiattiComponent,
    SecondiPiattiComponent,
    AntipastiComponent,
    DolciComponent,
    CardHomeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    NgbModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
