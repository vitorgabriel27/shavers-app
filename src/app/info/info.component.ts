import { Component } from '@angular/core';

@Component({
  selector: 'info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.scss'],
})
export class InfoComponent {

  constructor () {};

  public slideOpts: any = {
    speed: 400,
    slidesPerView: 3,
    freeMode: true,
  };
  
  public portfolio = [
    {
      title: 'Titulo',
      imgURl:'',
    },
    {
      title: 'Titulo',
      imgURl:'',
    },
    {
      title: 'Titulo',
      imgURl:'',
    },
    {
      title: 'Titulo',
      imgURl:'',
    },
    {
      title: 'Titulo',
      imgURl:'',
    }

  ];

  public services = [
    {
      title: 'Serviço',
      desc: 'lorem ipsum dolor sit',
    },
    {
      title: 'Serviço',
      desc: 'lorem ipsum dolor sit',
    },
    {
      title: 'Serviço',
      desc: 'lorem ipsum dolor sit',
    },
    {
      title: 'Serviço',
      desc: 'lorem ipsum dolor sit',
    },
  ];
}
