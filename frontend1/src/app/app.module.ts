
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/templates/header/header.component';
import { CardComponent } from './components/templates/card/card.component';
import { FooterComponent } from './components/templates/footer/footer.component';
import { MovieListComponent } from './components/pages/movie/movie-list/movie-list.component';
import { MovieRegisterComponent } from './components/pages/movie/movie-register/movie-register.component';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { CardsComponent } from './components/pages/movie/cards/cards.component';
import { MovieDeleteComponent } from './components/pages/movie/movie-delete/movie-delete.component';

// import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CardComponent,
    FooterComponent,
    MovieListComponent,
    MovieRegisterComponent,
    CardsComponent,
    MovieDeleteComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    // FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
