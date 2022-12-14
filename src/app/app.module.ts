import { Injector, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgCardElementComponent } from './ng-card-element/ng-card-element.component';
import { createCustomElement } from '@angular/elements';

@NgModule({
  declarations: [
    AppComponent,
    NgCardElementComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  //bootstrap: [AppComponent]
  //use entryComponents array instaed of bootstrap because it will be added dynamically.
  entryComponents: [NgCardElementComponent]
})

export class AppModule {
  constructor(private injector: Injector) {}

  ngDoBootstrap() {
    // using createCustomElement from angular package it will convert angular component to stander web component
    const el = createCustomElement(NgCardElementComponent, {
      injector: this.injector
    });

    // using built in the browser to create your own custome element name
    customElements.define('facebook-card', el);
  }
}
