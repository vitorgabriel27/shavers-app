import { Component } from '@angular/core';

@Component({
  selector: 'pix',
  templateUrl: './pix.component.html',
  styleUrls: ['./pix.component.scss'],
})
export class PixComponent {
  constructor() {};

  public pix = [
    {
     key: '123.456.789-01',
    },
  ];
}
