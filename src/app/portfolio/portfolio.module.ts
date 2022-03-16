import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PortfolioComponent } from './portfolio.component';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    RouterModule,

  ],
  declarations: [PortfolioComponent]
})
export class PortfolioComponentModule {}