import { Component, OnInit } from '@angular/core';
import { Post } from 'src/app/models/post.interface';
import { ActivatedRoute } from '@angular/router';
import { PostsService } from 'src/app/service/posts.service';


@Component({
    selector: 'app-dettagli-post',
    templateUrl: './dettagli-post.component.html',
    styleUrls: ['./dettagli-post.component.scss']
})
export class DettagliPostComponent implements OnInit {

    p: Post | undefined
    loading = true;

    constructor(private ar: ActivatedRoute, private pstSrv: PostsService) { }

    ngOnInit(): void {
        let x = this.ar.snapshot.params["id"];
        this.pstSrv.getPosts().subscribe((post: Post[]) => {
            this.loading = false;
            this.p = post.find((element) => {
                if(x == element.id) {
                    return true
                }
                else {
                    return false
                }
            })
        })
    }

}
