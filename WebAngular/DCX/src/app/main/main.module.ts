import { NgModule } from '@angular/core';
import { InicioComponent } from './pages/inicio/inicio.component';
import { CardsComponent } from './components/cards/cards.component';
import { VideoComponent } from './components/video/video.component';
import { TradeComponent } from './components/trade/trade.component';
import { SolutionsComponent } from './components/solutions/solutions.component';
import { DcxFinanceComponent } from './pages/dcx-finance/dcx-finance.component';
import { DcxFreightComponent } from './pages/dcx-freight/dcx-freight.component';
import { DcxGrainsComponent } from './pages/dcx-grains/dcx-grains.component';
import { DcxInsuranceComponent } from './pages/dcx-insurance/dcx-insurance.component';
import { RiceExchangeComponent } from './pages/rice-exchange/rice-exchange.component';
import { FertilizerExchangeComponent } from './pages/fertilizer-exchange/fertilizer-exchange.component';
import { DcxPulsesComponent } from './pages/dcx-pulses/dcx-pulses.component';
import { MaterialModule } from '../material/material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatCarouselModule } from '@ngmodule/material-carousel';
import { CarouselComponentt } from './components/carousel/carousel.component';
import { CommonModule } from '@angular/common';
import { OurPartnersComponent } from './pages/our-partners/our-partners.component';
import { BannerImgTextComponent } from './components/banner/baner.component';


@NgModule({
  declarations: [
    InicioComponent,
    CardsComponent,
    CarouselComponentt,
    VideoComponent,
    TradeComponent,
    SolutionsComponent,
    DcxFinanceComponent,
    DcxFreightComponent,
    DcxGrainsComponent,
    DcxInsuranceComponent,
    RiceExchangeComponent,
    FertilizerExchangeComponent,
    DcxPulsesComponent,
    OurPartnersComponent,
    BannerImgTextComponent
  ],
  exports:[
  ],
  imports: [
    MaterialModule,
    FlexLayoutModule,
    MatCarouselModule,
    CommonModule
  ]
})
export class MainModule { }