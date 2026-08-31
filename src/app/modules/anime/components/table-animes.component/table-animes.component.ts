import { Component, Input } from '@angular/core';

import { Anime } from '../../interfaces/anime.interface';

@Component({
  selector: 'app-table-animes',
  templateUrl: './table-animes.component.html',
  styleUrl: './table-animes.component.scss',
  standalone: false,
})
export class TableAnimesComponent {

  @Input()
  anime: Anime[] = [];

}