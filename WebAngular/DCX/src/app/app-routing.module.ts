import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DcxFinanceComponent } from './main/pages/dcx-finance/dcx-finance.component';
import { DcxFreightComponent } from './main/pages/dcx-freight/dcx-freight.component';
import { DcxGrainsComponent } from './main/pages/dcx-grains/dcx-grains.component';
import { DcxInsuranceComponent } from './main/pages/dcx-insurance/dcx-insurance.component';
import { DcxPulsesComponent } from './main/pages/dcx-pulses/dcx-pulses.component';
import { FertilizerExchangeComponent } from './main/pages/fertilizer-exchange/fertilizer-exchange.component';
import { InicioComponent } from './main/pages/inicio/inicio.component';
import { RiceExchangeComponent } from './main/pages/rice-exchange/rice-exchange.component';
import { OurPartnersComponent } from './main/pages/our-partners/our-partners.component';

const routes: Routes = [
  {
    path: 'inicio',
    component: InicioComponent
  },
  {
    path: 'dcx-finance',
    component: DcxFinanceComponent,
  },
  {
    path: 'dcx-freight',
    component: DcxFreightComponent
  },
  {
    path: 'dcx-grain',
    component: DcxGrainsComponent
  },
  {
    path: 'dcx-insurance',
    component: DcxInsuranceComponent
  },
  {
    path: 'dcx-pulse',
    component: DcxPulsesComponent
  },
  {
    path: 'fertilizer-exchange',
    component: FertilizerExchangeComponent
  },
  {
    path: 'rice-exchange',
    component: RiceExchangeComponent
  },
  {
    path:'our-partners',
    component: OurPartnersComponent
  },
  {
    path: '',
    redirectTo: 'inicio',
    pathMatch: 'full'
  }
  // {
  //   path: '**',
  //   redirectTo: 'inicio'
  // }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }