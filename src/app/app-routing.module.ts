import { PokeDetailComponent } from './components/poke-detail/poke-detail.component';
import { HomeComponent } from './components/home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: 'home/:id', component: HomeComponent},
  {path: 'home', pathMatch: 'full', redirectTo: 'home/1'},
  {path: '', pathMatch: 'full', redirectTo: 'home/1'},
  {path: '**', pathMatch: 'full', redirectTo: 'home/1'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
