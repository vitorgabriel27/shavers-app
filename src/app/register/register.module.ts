import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { RegisterRoutingModule } from './register-routing.module';
import { AddInfoComponent } from './add-info/add-info.component';
import { AddAdressComponent } from './add-adress/add-adress.component';
import { AddProfileComponent } from './add-profile/add-profile.component';
import { VerifyComponent } from './verify/verify.component';
import { InitComponent } from './init/init.component';





@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    RegisterRoutingModule,
    RouterModule,
    
  ],
  declarations: [
    AddInfoComponent,
    AddAdressComponent,
    AddProfileComponent,
    VerifyComponent,
    InitComponent,
  ]
})
export class RegisterModule {}
