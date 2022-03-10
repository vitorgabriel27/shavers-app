import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Tab4Page } from './tab4.page';
import { InfoComponent } from '../info/info.component';
import { TermsComponent } from '../terms/terms.component';
import { PixComponent } from '../pix/pix.component';

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
    path: 'terms',
    component: TermsComponent,
  },
  {
    path: 'pix',
    component: PixComponent,
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Tab4PageRoutingModule {}
