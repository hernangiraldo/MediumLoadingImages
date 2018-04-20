import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { PreloadImgComponent } from './preload-img/preload-img.component';


@NgModule({
  declarations: [
    AppComponent,
    PreloadImgComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
