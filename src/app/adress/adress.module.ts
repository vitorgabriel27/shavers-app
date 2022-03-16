import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdressComponent } from './adress.component';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    RouterModule,

  ],
  declarations: [AdressComponent]
})
export class AdressComponentModule {}