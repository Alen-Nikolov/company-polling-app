import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {QuestionsComponent} from "./questions/questions.component";
import {PageNotFoundComponent} from "./page-not-found/page-not-found.component";

const appRoutes: Routes = [
  {path: '', component: QuestionsComponent, pathMatch: 'full'},
  {path: '404', component: PageNotFoundComponent},
  {path: '**', redirectTo: '/404'}
];


@NgModule({
  exports: [RouterModule],
  imports: [RouterModule.forRoot(appRoutes)]
})
export class AppRoutingModule {
}
