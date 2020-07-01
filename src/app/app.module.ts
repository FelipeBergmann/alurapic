import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PhotosModule } from './photos/photos.module';
import { AppRountingModule } from './app.rounting.module';
import { ErrorsModule } from './errors/errors.module';
import { HomeModule } from './home/home.module';

@NgModule({
  declarations: [
    AppComponent    
  ],
  imports: [
    BrowserModule,
    PhotosModule,
    AppRountingModule,
    ErrorsModule,
    HomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
