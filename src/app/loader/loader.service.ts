import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class LoaderService {
    constructor(private http: Http) { }
    public load(url: string): Observable<{ content: string }> {
        return this.http.get(url).map((response, index) => ({ content: response.text() }));
    }
}