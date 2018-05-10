import {Component, OnInit} from '@angular/core';
import {CompaniesService} from "./companies.service";

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
    companies = '';

    constructor(private companiesService: CompaniesService) {

    }

    ngOnInit() {
        this.companiesService.getAllCompanies().subscribe(companies => {
            this.companies = companies;
        })
    }
}
