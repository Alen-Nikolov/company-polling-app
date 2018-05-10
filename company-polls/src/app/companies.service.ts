import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class CompaniesService {

    constructor(private http: Http) { }

    // Get all posts from the API
    getAllCompanies() {
        return this.http.get('/companies')
            .map(res => res.json());
    }
}
