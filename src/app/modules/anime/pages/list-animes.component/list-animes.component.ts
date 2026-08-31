import { Component, inject } from '@angular/core';
import { Anime } from '../../interfaces/anime.interface';
import { AnimeService } from '../../services/anime.service';


@Component({
  selector: 'app-list-animes',
  template: `
    <app-table-animes [anime]="anime"></app-table-animes>
  `,
  standalone: false,
})
export class ListAnimesComponent {
  anime: Anime[] = [];

  private animeService = inject(AnimeService);

  ngOnInit(): void {
    this.animeService.getTopAnime().subscribe({
      next: (response) => this.anime = response.data,
      error: (error) => console.error(error),
    });
  }
}
