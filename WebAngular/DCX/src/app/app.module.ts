import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainModule } from './main/main.module';
import { SharedModule } from './shared/shared.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { MatCarouselModule } from '@ngmodule/material-carousel';
import { FlexLayoutModule } from '@angular/flex-layout';
import {MatTreeModule} from '@angular/material/tree';
import { RouterPipe } from './pipes/router.pipe';


@NgModule({
  declarations: [
    AppComponent,
    RouterPipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    MainModule,
    BrowserAnimationsModule,
    MaterialModule,
    MatCarouselModule,
    FlexLayoutModule,
    MatTreeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
