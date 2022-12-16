import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Post } from '../models/post.interface';

@Injectable({
    providedIn: 'root'
})
export class PostsService {

    constructor(private http: HttpClient) { }

    getPosts(): Observable<Post[]> {
        return this.http.get<Post[]>('http://localhost:4201/posts');
    }

    getAntipasti(): Observable<Post[]> {
        return this.http.get<Post[]>('http://localhost:4201/antipasti');
    }

    getPrimi(): Observable<Post[]> {
        return this.http.get<Post[]>('http://localhost:4201/primiPiatti');
    }

    getSecondi(): Observable<Post[]> {
        return this.http.get<Post[]>('http://localhost:4201/secondiPiatti');
    }

    getDolci(): Observable<Post[]> {
        return this.http.get<Post[]>('http://localhost:4201/dolci');
    }

    addPost(data: { title: string; body: string }) {
       return this.http.post('http://localhost:4201/posts', data);
    }

    updatePost(post: Post) {
        return this.http.put<Post>(`http://localhost:4201/posts/${post.id}`, post);
    }

    updatePrimi(post: Post) {
        return this.http.put<Post>(`http://localhost:4201/primiPiatti/${post.id}`, post);
    }

    updateSecondi(post: Post) {
        return this.http.put<Post>(`http://localhost:4201/secondiPiatti/${post.id}`, post);
    }
}

