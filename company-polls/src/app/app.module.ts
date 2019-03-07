import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {CompaniesService} from './companies.service';
import {FormsModule} from '@angular/forms';
import {QuestionsService} from './questions.service';
import {PageNotFoundComponent} from './page-not-found/page-not-found.component';
import { QuestionsComponent } from './questions/questions.component';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { ResultsComponent } from './results/results.component';


@NgModule({
    declarations: [
        AppComponent,
        PageNotFoundComponent,
        QuestionsComponent,
        ResultsComponent
    ],
    imports: [
        BrowserModule,
        HttpClientModule,
        FormsModule,
        AppRoutingModule
    ],
    providers: [CompaniesService, QuestionsService],
    bootstrap: [AppComponent]
})
export class AppModule {
}
