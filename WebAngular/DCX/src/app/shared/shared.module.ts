import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { RouterModule } from '@angular/router';
import { MaterialModule } from '../material/material.module';
import { FlexLayoutModule } from '@angular/flex-layout'
import { MatTreeModule } from '@angular/material/tree';
import { RouterPipe } from './pipes/router.pipe';


@NgModule({
  declarations: [
    NavbarComponent,
    FooterComponent,
    RouterPipe
  ],
  imports: [
    CommonModule,
    RouterModule,
    MaterialModule,
    FlexLayoutModule,
    MatTreeModule
   ],
  exports:[
    NavbarComponent,
    FooterComponent
  ]
})
export class SharedModule { }