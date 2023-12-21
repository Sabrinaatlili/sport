import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { HomeComponent } from './components/home/home.component';
import { MatchesComponent } from './components/matches/matches.component';
import { AdminComponent } from './components/admin/admin.component';
import { AddMatchComponent } from './components/add-match/add-match.component';
import { AddTeamComponent } from './components/add-team/add-team.component';
import { AddPlayerComponent } from './components/add-player/add-player.component';
import { MatchInfoComponent } from './components/match-info/match-info.component';
import { PlayersTableComponent } from './components/players-table/players-table.component';
import { PlayerInfoComponent } from './components/player-info/player-info.component';
import { TeamInfoComponent } from './components/team-info/team-info.component';
import { EditMatchComponent } from './components/edit-match/edit-match.component';
import { PlayerComponent } from './components/player/player.component';
import { PlayersComponent } from './components/players/players.component';
import { WeatherComponent } from './components/weather/weather.component';
import { TeamsComponent } from './components/teams/teams.component';
import { EditPlayerComponent } from './components/edit-player/edit-player.component';
import { EditTeamComponent } from './components/edit-team/edit-team.component';
import { StadiumComponent } from './components/stadium/stadium.component';

const routes: Routes = [
  // http://localhost:4200: url de base
{path:"",component:HomeComponent},
// login component va etre afficher 
{path:"login",component:LoginComponent},
// http://localhost:4200/subscription/login
{path:"subscription",component:SignupComponent},
// http://localhost:4200/signupAdmin
{path:"signupAdmin",component:SignupComponent},
// http://localhost:4200/matches
{path:"matches",component:MatchesComponent},
// http://localhost:4200/admin
{path:"dashboard",component:AdminComponent},
// http://localhost:4200/addMatch
{path:"addMatch",component:AddMatchComponent},
// http://localhost:4200/addStadium
{path:"addStadium",component:StadiumComponent},
// http://localhost:4200/addMatch
{path:"addTeam",component:AddTeamComponent},
// http://localhost:4200/addPlayer
{path:"addPlayer",component:AddPlayerComponent},
// http://localhost:4200/matchInfo
{path:"matchInfo/:id",component:MatchInfoComponent},
// http://localhost:4200/edit match
{path:"editMatch/:id",component:EditMatchComponent},
// http://localhost:4200/edit player
{path:"editPlayer/:id",component:EditPlayerComponent},
// http://localhost:4200/edit team
{path:"editTeam/:id",component:EditTeamComponent},
// http://localhost:4200/playerInfo
{path:"playerInfo/:id",component:PlayerInfoComponent},
// http://localhost:4200/teamInfo
{path:"teamInfo/:id",component:TeamInfoComponent},
// http://localhost:4200/Players 
{path:"players",component:PlayersComponent},
// http://localhost:4200/Teams 
{path:"teams",component:TeamsComponent},
// http://localhost:4200/Players 
{path:"player",component:PlayerComponent},
// http://localhost:4200/searchWeather 
{path:"weather",component:WeatherComponent}
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
