import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ArticleComponent } from 'src/article/article-comp.component';

import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer-comp.component';
import { HeaderComponent } from './header/header-comp.component';
import { MainComponent } from './main/main-comp.component';
import { NavComponent } from './nav/nav-comp.component';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    HeaderComponent,
    NavComponent,
    FooterComponent,
    ArticleComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
