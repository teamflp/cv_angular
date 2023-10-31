import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AboutComponent} from "./myComponents/about/about.component";
import { CompetenceComponent } from './myComponents/competence/competence.component';
import { ContactComponent } from './myComponents/contact/contact.component';
import {ExperienceComponent} from "./myComponents/experience/experience.component";
import { FormationComponent } from './myComponents/formation/formation.component';

const routes: Routes = [
   { path: 'about', component: AboutComponent }, // Attention pas de /about. Plutot about tout cours.
   { path: 'experience', component: ExperienceComponent},
   { path: 'competence', component: CompetenceComponent},
   { path: 'formation', component: FormationComponent},
   { path: 'contact', component: ContactComponent},
   { path: '', redirectTo: '/', pathMatch: 'full' }, // default route
   { path: '**', redirectTo: '/home' } // wildcard route
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
