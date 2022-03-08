import { Component } from '@angular/core';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss'],
})
export class Tab2Page {
  constructor() {}

  public transactions = [
    {
      title: 'Transferência recebida',
      name: 'Thomas Wilson Dias Batista',
      date: '15/02/2022',
      price: 'R$ 68,00',
    },
    {
      title: 'Retirada de Dinheiro',
      name: 'Enviado via Pix',
      date: '10/02/2022',
      price: 'R$ 312,65',
    },
    {
      title: 'Transferência recebida',
      name: 'Thomas Wilson Dias Batista',
      date: '15/02/2022',
      price: 'R$ 68,00',
    },
    {
      title: 'Transferência recebida',
      name: 'Thomas Wilson Dias Batista',
      date: '15/02/2022',
      price: 'R$ 68,00',
    },
    {
      title: 'Transferência recebida',
      name: 'Thomas Wilson Dias Batista',
      date: '15/02/2022',
      price: 'R$ 68,00',
    },
  ];
}
