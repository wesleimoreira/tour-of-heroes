import { NgModule } from '@angular/core';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatTableModule } from '@angular/material/table';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatExpansionModule } from '@angular/material/expansion';

const MODULES = [
  MatListModule,
  MatIconModule,
  MatCardModule,
  MatTableModule,
  MatInputModule,
  MatButtonModule,
  MatTooltipModule,
  MatToolbarModule,
  MatExpansionModule,
];

@NgModule({
  imports: [MODULES],
  exports: [MODULES],
})
export class MaterialModule {}
