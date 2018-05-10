import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';


import {AppComponent} from './app.component';
import {CompaniesService} from "./companies.service";
import {HttpModule} from "@angular/http";
import {FormsModule} from "@angular/forms";
import {QuestionsService} from "./questions.service";


@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        HttpModule,
        FormsModule
    ],
    providers: [CompaniesService, QuestionsService],
    bootstrap: [AppComponent]
})
export class AppModule {
}
