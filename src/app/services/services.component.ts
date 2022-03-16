import { Component } from '@angular/core';

@Component({
  selector: 'services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss'],
  
})
export class ServicesComponent {

  constructor () {};
 
    public services = [
      {
        name: 'Nome do Serviço',
        duration: '50-70',
      }
    ];
}
