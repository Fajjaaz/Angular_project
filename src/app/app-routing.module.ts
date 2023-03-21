import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailsPage } from './pages/details/details.page';
import { HomeComponent } from './home/home.component';
import { HomePageComponent } from './home-page/home-page.component';
import { SeatsCapComponent } from './seats-cap/seats-cap.component';
import { LuggageCapComponent } from './luggage-cap/luggage-cap.component';
import { CateringComponent } from './catering/catering.component';
import { CrewComponent } from './crew/crew.component';

const routes: Routes = [
  { path: "", component: HomeComponent},
  { path: "flightnumber", component:HomeComponent},
  { path: "details", component: DetailsPage },
  { path: "home", component: HomePageComponent},
  { path: "seats", component: SeatsCapComponent},
  { path: "luggage", component: LuggageCapComponent},
  { path: "catering", component: CateringComponent},
  { path: "crew", component: CrewComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
