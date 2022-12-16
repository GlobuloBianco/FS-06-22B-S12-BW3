import { Component, OnInit } from '@angular/core';
import { Post } from 'src/app/models/post.interface';
import { HttpClient } from '@angular/common/http';
import { Subscription } from 'rxjs';
import { PostsService } from 'src/app/service/posts.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-antipasti',
  templateUrl: './antipasti.component.html',
  styleUrls: ['./antipasti.component.scss']
})
export class AntipastiComponent implements OnInit {

    sub!: Subscription
    posts: Post[] | undefined
    loading = true;

    constructor(private http: HttpClient, private pstSrv: PostsService, private router: Router) { }

    ngOnInit(): void {
        this.getAntipasti();
    }

    getAntipasti() {
        this.sub = this.pstSrv.getAntipasti().subscribe((ris) => {
            this.posts = ris;
            this.loading = false;
        })
    }

    cancella(id: number) {
        this.http.delete('http://localhost:4201/posts/' + id).subscribe();
        this.http.delete('http://localhost:4201/antipasti/' + id).subscribe();
        location.reload();
    }

}
