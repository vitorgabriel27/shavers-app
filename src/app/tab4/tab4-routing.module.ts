import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Tab4Page } from './tab4.page';
import { InfoComponent } from '../info/info.component';
import { TermsComponent } from '../terms/terms.component';
import { AdressComponent } from '../adress/adress.component';
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
    path: 'adress',
    component: AdressComponent,
  },
 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Tab4PageRoutingModule {}
