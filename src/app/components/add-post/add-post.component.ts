import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { PostsService } from 'src/app/service/posts.service';
import { NgForm } from '@angular/forms';

@Component({
    selector: 'app-add-post',
    templateUrl: './add-post.component.html',
    styleUrls: ['./add-post.component.scss']
})
export class AddPostComponent implements OnInit {

    constructor(private http: HttpClient, private postData: PostsService) { }

    ngOnInit(): void {
    }

    publica(form: NgForm) {
        console.log(form.value);
        try {
            this.postData.addPost(form.value).subscribe();
            form.reset();
        }
        catch (error) {
            console.error(error);
        }
    }

}
