import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
 
import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { ProdottoComponent } from './prodotto/prodotto.component';
import { PulsanteComponent } from './shared/pulsante.component';
import { NewComponentComponent } from './new-component/new-component.component';

@NgModule({
  declarations: [
    AppComponent,
    //aggiungiamolo nell'array con il suo import
    PulsanteComponent,
    MainComponent,
    ProdottoComponent,
    NewComponentComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
