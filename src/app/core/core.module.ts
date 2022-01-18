import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MaterialModule } from '../material/material.module';
import { NgModule, Optional, SkipSelf } from '@angular/core';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { MessagesComponent } from './components/messages/messages.component';
import { PageNotFoundComponent } from './components/page-not-found.component';

const COMPONENTS = [ToolbarComponent, MessagesComponent, PageNotFoundComponent];
const MODULES = [FlexLayoutModule, MaterialModule, RouterModule];

@NgModule({
  declarations: [COMPONENTS],
  imports: [CommonModule, MODULES],
  exports: [COMPONENTS, MODULES],
})
export class CoreModule {
  constructor(@Optional() @SkipSelf() parentModel?: CoreModule) {
    if (parentModel) {
      throw new Error(
        'CoreModel gas already been loaded. Import this module in the AppModule'
      );
    }
  }
}
