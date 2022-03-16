import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PixComponent } from './pix.component';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    RouterModule,

  ],
  declarations: [PixComponent]
})
export class PixComponentModule {}