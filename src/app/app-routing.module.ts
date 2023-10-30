import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AboutComponent} from "./myComponents/about/about.component";
import { ContactComponent } from './myComponents/contact/contact.component';

const routes: Routes = [
   { path: 'about', component: AboutComponent }, // Attention pas de /about. Plutot about tout cours.
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
