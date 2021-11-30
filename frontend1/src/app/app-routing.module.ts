import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MovieListComponent } from './components/pages/movie/movie-list/movie-list.component';
import { MovieRegisterComponent} from './components/pages/movie/movie-register/movie-register.component';
import { CardsComponent } from './components/pages/movie/cards/cards.component';
const routes: Routes = [
 
  {
    path: "movie/register",
    component: MovieRegisterComponent
  },
  {
    path: "movie/list",
    component: MovieListComponent
  },
  {
    path: "movie/cards",
    component: CardsComponent
  },
  {
    path: "movie/delete/:id",
    component: CardsComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
