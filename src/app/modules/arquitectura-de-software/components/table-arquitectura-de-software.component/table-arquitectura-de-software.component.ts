import { Component, Input } from '@angular/core';
import { ArquitecturaDeSoftware } from '../../interfaces/arquitectura-de-software.interface';

@Component({
  selector: 'app-table-arquitectura-de-software',
  standalone: false,
  templateUrl: './table-arquitectura-de-software.component.html',
  styleUrl: './table-arquitectura-de-software.component.scss',
})
export class TableArquitecturaDeSoftwareComponent {

  @Input()
  arquitecturaDeSoftware : ArquitecturaDeSoftware[] = [];
}
