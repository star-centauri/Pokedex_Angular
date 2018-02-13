import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { HttpClientModule} from '@angular/common/http';

import { ListComponent} from './list/list.component';
import { InformationComponent} from './information/information.component';
import { PokeapiService} from './pokeapi.service';
import { PokedexRoutingModule } from './pokedex.routing.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    HttpModule,
    PokedexRoutingModule
  ],
  exports: [
    ListComponent,
    InformationComponent
  ],
  declarations: [
    ListComponent,
    InformationComponent
  ],
  providers: [
    PokeapiService
  ]
})
export class PokedexModule { }
