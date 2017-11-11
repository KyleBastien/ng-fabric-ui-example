import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FabricLabelModule } from 'ng-fabric-ui';


import { AppComponent } from './app.component';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FabricLabelModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
