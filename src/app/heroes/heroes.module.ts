import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MaterialModule } from '../material/material.module';
import { HeroesRoutingModule } from './heroes-routing.module';
import { HeroesComponent } from './components/heroes/heroes.component';
import { HeroDetailComponent } from './components/hero-detail/hero-detail.component';

@NgModule({
  declarations: [HeroesComponent, HeroDetailComponent],
  imports: [CommonModule, MaterialModule, FormsModule, HeroesRoutingModule, FlexLayoutModule],
})
export class HeroesModule {}
