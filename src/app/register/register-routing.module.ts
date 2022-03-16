import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterModule } from './register.module';

import { AddInfoComponent } from './add-info/add-info.component';
import { AddAdressComponent } from './add-adress/add-adress.component';
import { AddProfileComponent } from './add-profile/add-profile.component';
import { VerifyComponent } from './verify/verify.component';
import { InitComponent } from './init/init.component';




const routes: Routes = [
  {
    path: '',
    component: RegisterModule,
    children: [
      { path: 'init', component: InitComponent},
      { path: 'add-adress', component: AddAdressComponent},
      { path: 'add-info', component: AddInfoComponent},
      { path: 'add-profile', component: AddProfileComponent},
      { path: 'verify', component: VerifyComponent},
      {
        path: '',
        redirectTo: '/register/init',
        pathMatch: 'full',
      },
    ],
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class RegisterRoutingModule {}
