import { Component, Input } from '@angular/core';

import { GodOfWarInterface } from '../../interfaces/god-of-war.interface';

@Component({
  selector: 'app-table-god-of-war-characters',
  standalone: false,
  styleUrl: './table-god-of-war-characters.component.scss',
  templateUrl: './table-god-of-war-characters.component.html',
})
export class TableGodOfWarCharactersComponent {

  @Input() characters: GodOfWarInterface[] = [];

}