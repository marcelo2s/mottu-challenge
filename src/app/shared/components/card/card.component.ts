import { Component, Input } from '@angular/core';
import { CardData } from '@app/data/types/card-data.model';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss'
})
export class CardComponent {

  constructor() {}

  @Input() data!: CardData;
  

}
