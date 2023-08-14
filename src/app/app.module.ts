import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { RankingPageComponent } from './pages/ranking-page/ranking-page.component';
import { NavBarComponent } from './features/nav-bar/nav-bar.component';
import { AnalyzePageComponent } from './pages/analyze-page/analyze-page.component';
import { ComparePageComponent } from './pages/compare-page/compare-page.component';
import { MyRankingsPageComponent } from './pages/my-rankings-page/my-rankings-page.component';
import { UserPageComponent } from './pages/user-page/user-page.component';
import { CardComponent } from './shared/card/card.component';
import { ButtonComponent } from './shared/button/button.component';
import { HttpClientModule } from '@angular/common/http';
import { RankingsTableComponent } from './features/rankings-table/rankings-table.component';
import { DropdownComponent } from './shared/dropdown/dropdown.component';
import { SearchBarComponent } from './shared/search-bar/search-bar.component';
import { FormsModule } from '@angular/forms';
import { RankingIconComponent } from './shared/ranking-icon/ranking-icon.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    RankingPageComponent,
    NavBarComponent,
    AnalyzePageComponent,
    ComparePageComponent,
    MyRankingsPageComponent,
    UserPageComponent,
    CardComponent,
    ButtonComponent,
    RankingsTableComponent,
    DropdownComponent,
    SearchBarComponent,
    RankingIconComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
