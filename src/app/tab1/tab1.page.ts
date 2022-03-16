import { Component } from '@angular/core';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
})
export class Tab1Page {
  constructor() {}

  public slides = [
    {
      title: 'Titulo',
      description: 'Descrição',
    },
    {
      title: 'Titulo',
      description: 'Descrição',
    },
    {
      title: 'Titulo',
      description: 'Descrição',
    },
    {
      title: 'Titulo',
      description: 'Descrição',
    },
    {
      title: 'Titulo',
      description: 'Descrição',
    },
    {
      title: 'Titulo',
      description: 'Descrição',
    },
  ];

  public companies = [
    {
      title: 'Titulo',
      description: 'Descrição Barbearia. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse in mauris porta, pulvinar...',
    },
    {
      title: 'Titulo',
      description: 'Descrição',
    },
  ];
  public slideOpts: any = {
    speed: 400,
    slidesPerView: 3,
    freeMode: true,
  };
}
