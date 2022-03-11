import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Tab4Page } from './tab4.page';
import { InfoComponent } from '../info/info.component';
import { TermsComponent } from '../terms/terms.component';
import { PixComponent } from '../pix/pix.component';
import { AdressComponent } from '../adress/adress.component';
import { PortfolioComponent } from '../portfolio/portfolio.component';
import { ServicesComponent } from '../services/services.component';
import { EditInfoComponent } from '../edit-info/edit-info.component';

const routes: Routes = [
  {
    path: '',
    component: Tab4Page,
  },
  {
    path: 'info',
    component: InfoComponent,
  },
  {
    path: 'edit-info',
    component: EditInfoComponent,
  },
  {
    path: 'terms',
    component: TermsComponent,
  },
  {
    path: 'pix',
    component: PixComponent,
  },
  {
    path: 'adress',
    component: AdressComponent,
  },
  {
    path: 'portfolio',
    component: PortfolioComponent,
  },
  {
    path: 'services',
    component: ServicesComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Tab4PageRoutingModule {}
