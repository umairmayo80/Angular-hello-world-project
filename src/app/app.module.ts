import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ], //This property is an array that specifies the components, directives, and pipes that belong to this module.
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent] //bootstrap: [AppComponent]: This property is an array that specifies the root component that should be bootstrapped when the application starts. In this case, the "AppComponent" is the root component.
})
export class AppModule { }
