import { Component, OnInit } from '@angular/core';
import {CompaniesService} from "../companies.service";
import {QuestionsService} from "../questions.service";
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.scss']
})
export class QuestionsComponent implements OnInit {
  companies = '';
  experienceRanges = [
    '0-6 months',
    '6-12 months',
    '1-3 years',
    '3-4 years',
    'over 4 years'
  ];
  messageFromBackend = '';

  constructor(private companiesService: CompaniesService, private questionService: QuestionsService) {

  }

  ngOnInit() {
    this.companiesService.getAllCompanies().subscribe(companies => {
      this.companies = companies;
    })
  }

  onSubmit(form: NgForm, modalMessage) {
    const object = {
      employeeName: form.value.name,
      companyId: +form.value['company-id'],
      experience: form.value.experience
    };
    this.questionService.addNewEntryInPolls(object).subscribe((data) => {
      this.messageFromBackend = (<any>data)._body;
      this.toggleModal(modalMessage);
    });
  }

  toggleModal(modalMessage) {
    modalMessage.classList.remove('fade');
    setTimeout(() => {
      modalMessage.classList.add('fade');
    }, 4000);
  }
}
