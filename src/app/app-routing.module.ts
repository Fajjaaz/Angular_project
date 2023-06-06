import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { HomePageComponent } from './home-page/home-page.component';
import { SeatsCapComponent } from './seats-cap/seats-cap.component';
import { LuggageCapComponent } from './luggage-cap/luggage-cap.component';
import { CateringComponent } from './catering/catering.component';
import { CrewComponent } from './crew/crew.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { LoginComponent } from './login/login.component';
import { AdminpageComponent } from './adminpage/adminpage.component';
import { AuthGuard } from './auth.guard';

const routes: Routes = [
  { path: "", component: HomeComponent},
  { path: "flightnumber", component:HomeComponent},
  { path: "details", component: HomePageComponent},
  { path: "seats", component: SeatsCapComponent},
  { path: "luggage", component: LuggageCapComponent},
  { path: "catering", component: CateringComponent},
  { path: "crew", component: CrewComponent},
  { path: "login", component: LoginComponent},
  { path: "admin", component: AdminpageComponent, canActivate: [AuthGuard]},
  { path: "**", component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
