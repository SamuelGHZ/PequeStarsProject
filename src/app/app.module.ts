import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {NgsRevealModule} from 'ngx-scrollreveal';
import { AppComponent } from './app.component';
import { OurMenuComponent } from './components/our-menu/our-menu.component';
import { FooterComponent } from './components/footer/footer.component';
import { AboutComponent } from './components/about/about.component';

@NgModule({
  declarations: [
    AppComponent,
    OurMenuComponent,
    FooterComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    NgsRevealModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 
  
}
