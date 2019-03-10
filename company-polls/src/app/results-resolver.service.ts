import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class ResultsResolverService {

  constructor(private http: HttpClient) { }

  resolve(): Observable<any> {
    return this.http.get('/results');
  }
}
