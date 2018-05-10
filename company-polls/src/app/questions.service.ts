import { Injectable } from '@angular/core';
import {Http} from "@angular/http";

@Injectable()
export class QuestionsService {

  constructor(private http: Http) { }

  addNewEntryInPolls(newPoll) {
    return this.http.post('/new-poll', newPoll);
  }

}
