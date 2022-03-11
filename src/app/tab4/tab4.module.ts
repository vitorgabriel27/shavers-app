import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Tab4Page } from './tab4.page';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';
import { InfoComponent } from '../info/info.component';
import { TermsComponent } from '../terms/terms.component';
import { PixComponent } from '../pix/pix.component';
import { AdressComponent } from '../adress/adress.component';
import { PortfolioComponent } from '../portfolio/portfolio.component';
import { ServicesComponent } from '../services/services.component';
import { EditInfoComponent } from '../edit-info/edit-info.component';

import { Tab4PageRoutingModule } from './tab4-routing.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ExploreContainerComponentModule,
    RouterModule.forChild([{ path: '', component: Tab4Page }]),
    Tab4PageRoutingModule,
  ],
  declarations: [Tab4Page, InfoComponent, TermsComponent, PixComponent, AdressComponent,
  PortfolioComponent,
  ServicesComponent,
  EditInfoComponent
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class Tab4PageModule {}
