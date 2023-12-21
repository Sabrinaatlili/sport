import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { LoginComponent } from './components/login/login.component';
import { CupEventComponent } from './components/cup-event/cup-event.component';
import { ScoreComponent } from './components/score/score.component';
import { NewsComponent } from './components/news/news.component';
import { StatsComponent } from './components/stats/stats.component';
import { VideosComponent } from './components/videos/videos.component';
import { BlogComponent } from './components/blog/blog.component';
import { MatchesComponent } from './components/matches/matches.component';
import { SignupComponent } from './components/signup/signup.component';
import { HomeComponent } from './components/home/home.component';
import { AddMatchComponent } from './components/add-match/add-match.component';
import { AddPlayerComponent } from './components/add-player/add-player.component';
import { AddTeamComponent } from './components/add-team/add-team.component';
import { ArticleComponent } from './components/article/article.component';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { MatchesTableComponent } from './components/matches-table/matches-table.component';
import { PlayersTableComponent } from './components/players-table/players-table.component';
import { TeamsTableComponent } from './components/teams-table/teams-table.component';
import { MatchInfoComponent } from './components/match-info/match-info.component';
import { PlayerInfoComponent } from './components/player-info/player-info.component';
import { TeamInfoComponent } from './components/team-info/team-info.component';
import { EditMatchComponent } from './components/edit-match/edit-match.component';
import { AdminComponent } from './components/admin/admin.component';
import { ReversePipe } from './pipes/reverse.pipe';
import { ReplaceVoyellesPipe } from './pipes/replace-voyelles.pipe';
import { PlayersComponent } from './components/players/players.component';
import { PlayerComponent } from './components/player/player.component';
import { HttpClientModule } from "@angular/common/http";
import { WeatherComponent } from './components/weather/weather.component';
import { TeamsComponent } from './components/teams/teams.component';
import { SingleTeamComponent } from './components/single-team/single-team.component';
import { SinglePlayerComponent } from './components/single-player/single-player.component';
import { EditPlayerComponent } from './components/edit-player/edit-player.component';
import { EditTeamComponent } from './components/edit-team/edit-team.component';
import { StadiumComponent } from './components/stadium/stadium.component';
import { StadimTableComponent } from './components/stadim-table/stadim-table.component';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    LoginComponent,
    CupEventComponent,
    ScoreComponent,
    NewsComponent,
    StatsComponent,
    VideosComponent,
    BlogComponent,
    MatchesComponent,
    SignupComponent,
    HomeComponent,
    AddMatchComponent,
    AddPlayerComponent,
    AddTeamComponent,
    ArticleComponent,
    MatchesTableComponent,
    PlayersTableComponent,
    TeamsTableComponent,
    MatchInfoComponent,
    PlayerInfoComponent,
    TeamInfoComponent,
    EditMatchComponent,
    AdminComponent,
    ReversePipe,
    ReplaceVoyellesPipe,
    PlayersComponent,
    PlayerComponent,
    WeatherComponent,
    TeamsComponent,
    SingleTeamComponent,
    SinglePlayerComponent,
    EditPlayerComponent,
    EditTeamComponent,
    StadiumComponent,
    StadimTableComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
