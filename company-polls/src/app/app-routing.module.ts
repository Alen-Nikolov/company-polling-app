import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {QuestionsComponent} from './questions/questions.component';
import {PageNotFoundComponent} from './page-not-found/page-not-found.component';
import {ResultsComponent} from './results/results.component';
import {ResultsResolverService} from './results-resolver.service';

const appRoutes: Routes = [
  {
    path: 'results',
    component: ResultsComponent,
    pathMatch: 'full',
    resolve: {
      results: ResultsResolverService
    }
  },
  {
    path: '',
    component: QuestionsComponent,
    pathMatch: 'full'
  },
  {
    path: '404',
    component: PageNotFoundComponent
  },
  {
    path: '**',
    redirectTo: '404'
  }
];


@NgModule({
  exports: [RouterModule],
  imports: [RouterModule.forRoot(appRoutes, {useHash: true})],
  providers: [ResultsResolverService]
})
export class AppRoutingModule {
}
