import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TestClassiComponent } from './test-classi/test-classi.component';
import { EsempiPipesComponent } from './esempi-pipes/esempi-pipes.component';

@NgModule({
  declarations: [
    AppComponent,
    TestClassiComponent,
    EsempiPipesComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
