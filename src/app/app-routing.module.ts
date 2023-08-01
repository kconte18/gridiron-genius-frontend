import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { RankingPageComponent } from './pages/ranking-page/ranking-page.component';
import { AnalyzePageComponent } from './pages/analyze-page/analyze-page.component';
import { ComparePageComponent } from './pages/compare-page/compare-page.component';
import { MyRankingsPageComponent } from './pages/my-rankings-page/my-rankings-page.component';
import { UserPageComponent } from './pages/user-page/user-page.component';

const routes: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'rankings', component: RankingPageComponent },
  { path: 'analyze', component: AnalyzePageComponent },
  { path: 'compare', component: ComparePageComponent },
  { path: 'my-rankings', component: MyRankingsPageComponent },
  { path: 'user', component: UserPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
