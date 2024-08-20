import { ChangeDetectionStrategy, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { PageEvent } from '@angular/material/paginator';

import { Subscription } from 'rxjs';

import { RickAndMortyService } from '@app/core/services/api/rick-and-morty.service';
import { Character } from '@app/data/types/character.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
  //changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomeComponent implements OnInit {

  characters: Character[] = [];
  totalCharacters = 0;
  pageSize = 20;
  pageSizeOptions = [5, 10, 15, 20];

  constructor(private readonly _rickMortyService: RickAndMortyService) {}

  ngOnInit() {
    this.loadCharacters(1);
  }
  
  loadCharacters(page: number): void {
    this._rickMortyService.getCharacters(page).subscribe(
      data => {
        this.characters = data.results;
        this.totalCharacters = data.info?.count;
      },
      error => {
        console.error('Error fetching characters', error);
      }
    );
  }

  pageChanged(event: PageEvent): void {
    this.loadCharacters(event.pageIndex + 1);
  }
}
