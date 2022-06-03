import { NgModule } from '@angular/core';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { RouterModule } from '@angular/router';
import { MaterialModule } from '../material/material.module';
import { FlexLayoutModule } from '@angular/flex-layout'
import { MatTreeModule } from '@angular/material/tree';


@NgModule({
  declarations: [
    NavbarComponent,
    FooterComponent
  ],
  imports: [
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