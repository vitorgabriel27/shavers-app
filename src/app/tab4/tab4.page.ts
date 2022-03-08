import { Component } from '@angular/core';

@Component({
  selector: 'app-tab4',
  templateUrl: 'tab4.page.html',
  styleUrls: ['tab4.page.scss'],
})
export class Tab4Page {
  constructor() {}

  public menu = [
    {
      title: 'Informações',
    },
    {
      title: 'Chave Pix',
    },
    {
      title: 'Endereço',
    },
    {
      title: 'Porfólio',
    },
    {
      title: 'Serviços',
    },
    {
      title: 'Disponibilidade',
    },
    {
      title: 'Politicas e Termos de Uso',
    },
  ];
}
