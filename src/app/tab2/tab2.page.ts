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

  public categories = [
    {
      url: 'https://downloadcursos.top/wp-content/uploads/2020/07/barbeiro-profissional.jpg',
      st: 'Degradê Navalhado',
    },
    {
      url: 'https://www.nucleocursos.com.br/uploads/cursos/thumbs/600x415-barbeiro-profissional2.jpg',
      st: 'Degradê Navalhado',
    },
    {
      url: 'https://downloadcursos.top/wp-content/uploads/2020/07/barbeiro-profissional.jpg',
      st: 'Degradê Navalhado',
    },
    
  ];
}
