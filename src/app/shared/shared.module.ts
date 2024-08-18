import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';

import { CardComponent } from './components/card/card.component';
import { SearchInputComponent } from './components/search-input/search-input.component';
import { InfoPanelComponent } from './components/info-panel/info-panel.component';

@NgModule({
  declarations: [
    CardComponent,
    SearchInputComponent,
    InfoPanelComponent
  ],
  imports: [
    CommonModule,
    FlexLayoutModule
  ],
  exports: [
    CardComponent,
    SearchInputComponent,
    InfoPanelComponent,
    FlexLayoutModule
  ]
})
export class SharedModule { }
