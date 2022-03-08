import { Component } from '@angular/core';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss'],
})
export class Tab3Page {
  constructor() {}

  public schedules = [
    {
      id: 1,
      title: 'Corte social e Barbaterapia',
      status: 'Agendado',
      locale: 'Salão',
      data: '02/10/2021',
      time: '15H30',
      price: '$65',
      transp: '$5',
      name: 'Thomas Wilson',
      city: 'São Paulo/SP',
      imgUrl: 'https://randomuser.me/api/portraits/lego/4.jpg',
    },
  ];
}
