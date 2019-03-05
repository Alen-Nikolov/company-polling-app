import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class QuestionsService {

  constructor(private http: HttpClient) {
  }

  addNewEntryInPolls(newPoll): Observable<any> {
    return this.http.post<Observable<any>>('/new-poll', newPoll);
  }
}
