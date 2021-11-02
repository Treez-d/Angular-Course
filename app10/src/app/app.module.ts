import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ElencoAtletiComponent } from './atleti/elenco-atleti/elenco-atleti.component';
import { NavbarComponent } from './navbar/navbar.component';
import { NuovoAtletaComponent } from './atleti/nuovo-atleta/nuovo-atleta.component';
import { RouterModule } from '@angular/router';
import { DettaglioAtletaComponent } from './atleti/dettaglio-atleta/dettaglio-atleta.component';
import { ModificaAtletaComponent } from './atleti/modifica-atleta/modifica-atleta.component';

@NgModule({
  declarations: [
    AppComponent,
    ElencoAtletiComponent,
    NavbarComponent,
    NuovoAtletaComponent,
    DettaglioAtletaComponent,
    ModificaAtletaComponent
  ],
  imports: [
    BrowserModule, 
    //per la navigazione principale -- root obbligatorie
    RouterModule.forRoot([
      {
        path:'atleti',
        component: ElencoAtletiComponent
      },
      {
        path:'atleti/nuovo',
        component: NuovoAtletaComponent
      },
      {
        path:'atleti/:id',
        component: DettaglioAtletaComponent
      },
      {
        path:'atleti/:id/modifica', 
        component: ModificaAtletaComponent
      },
      {
        //se l'utente non scrive nulla 
        path:'',
        redirectTo:'atleti',
        pathMatch: 'full'
      },
      //default rout, cerca le corrispondense dall'alto o create a component 404 not found
      {
        path:'**',
        redirectTo:'atleti',
        pathMatch: 'full'
      }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {  }
