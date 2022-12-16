import { Component, OnInit } from '@angular/core';
import { Post } from 'src/app/models/post.interface';
import { HttpClient } from '@angular/common/http';
import { Subscription } from 'rxjs';
import { PostsService } from 'src/app/service/posts.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-primi-piatti',
  templateUrl: './primi-piatti.component.html',
  styleUrls: ['./primi-piatti.component.scss']
})
export class PrimiPiattiComponent implements OnInit {

    sub!: Subscription
    posts: Post[] | undefined
    loading = true;

    constructor(private http: HttpClient, private pstSrv: PostsService, private router: Router) { }

    ngOnInit(): void {
        this.getPrimi();
    }

    getPrimi() {
        this.sub = this.pstSrv.getPrimi().subscribe((ris) => {
            this.posts = ris;
            this.loading = false;
        })
    }

    cancella(id: number) {
        this.http.delete('http://localhost:4201/posts/' + id).subscribe();
        this.http.delete('http://localhost:4201/primiPiatti/' + id).subscribe();
        location.reload();
    }

}
