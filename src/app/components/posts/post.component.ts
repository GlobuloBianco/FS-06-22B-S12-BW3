import { Component, OnInit } from '@angular/core';
import { Post } from 'src/app/models/post.interface';
import { HttpClient } from '@angular/common/http';
import { Subscription } from 'rxjs';
import { PostsService } from 'src/app/service/posts.service';
import { Router } from '@angular/router';

@Component({
    selector: 'app-post',
    templateUrl: './post.component.html',
    styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {

    sub!: Subscription
    posts: Post[] | undefined
    loading = true;

    constructor(private http: HttpClient, private pstSrv: PostsService, private router: Router) { }

    ngOnInit(): void {
        this.getPost();
    }

    getPost() {
        this.sub = this.pstSrv.getPosts().subscribe((ris) => {
            this.posts = ris;
            this.loading = false;
        })
    }

    cancella(id: number) {
        this.http.delete('http://localhost:4201/posts/' + id).subscribe();
        location.reload();
    }

}
