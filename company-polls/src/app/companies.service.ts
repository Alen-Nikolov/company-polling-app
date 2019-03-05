import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class CompaniesService {

  constructor(private http: HttpClient) {
  }

  // Get all posts from the API
  getAllCompanies(): Observable<any> {
    return this.http.get('/companies');
  }

  // Get all posts from the API
  getCompanyPositions(companyId): Observable<any> {
    return this.http.get<Observable<any>>('/companies/' + companyId);
  }
}
