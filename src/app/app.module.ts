import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { UniquePipe } from './unique.pipe';
import { UniqueprPipe } from './uniquepr.pipe';

@NgModule({
  declarations: [
    AppComponent,
    UniquePipe,
    UniqueprPipe
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
