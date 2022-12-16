import { Component, OnInit } from '@angular/core';
import { Post } from 'src/app/models/post.interface';
import { HttpClient } from '@angular/common/http';
import { Subscription } from 'rxjs';
import { PostsService } from 'src/app/service/posts.service';
import { Router } from '@angular/router';

@Component({
    selector: 'app-secondi-piatti',
    templateUrl: './secondi-piatti.component.html',
    styleUrls: ['./secondi-piatti.component.scss']
})
export class SecondiPiattiComponent implements OnInit {

    sub!: Subscription
    posts: Post[] | undefined
    loading = true;

    constructor(private http: HttpClient, private pstSrv: PostsService, private router: Router) { }

    ngOnInit(): void {
        this.getSecondi();
    }

    getSecondi() {
        this.sub = this.pstSrv.getSecondi().subscribe((ris) => {
            this.posts = ris;
            this.loading = false;
        })
    }

    cancella(id: number) {
        this.http.delete('http://localhost:4201/posts/' + id).subscribe();
        this.http.delete('http://localhost:4201/secondiPiatti/' + id).subscribe();
        location.reload();
    }

}
