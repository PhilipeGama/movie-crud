import { animate, style, transition, trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { MovieService } from 'src/app/services/movie.service';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss'],
  animations: [
    trigger('overlay', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('250ms', style({ opacity: .5 })),
      ]),
      transition(':leave', [
        animate('500ms', style({ opacity: 0 }))
      ])
    ]),
    trigger('modal', [
      transition(':enter', [
        style({ top: -999 }),
          animate('500ms', style({ top: '50%' })),
      ]),
      transition(':leave', [
        animate('250ms', style({ top: -999 }))
      ])
    ]),
  ]
})
export class CardsComponent implements OnInit {
  public movies;
  selectMovie;
  showView

  constructor(
    private movieService: MovieService) {}


  ngOnInit(): void {
    this.fecthMovies();
  }

  fecthMovies(){
    this.movieService.getAll().subscribe(movies => {
      this.movies = movies;
    });
  }

  toggleCloseView(show: boolean){
    this.showView = show;
  }

  toggleView(index: number){
    if(index == -1){
      this.selectMovie = null;
    } else {
      this.selectMovie = this.movies[index];
      this.showView = true;
    }
  }
  

}
