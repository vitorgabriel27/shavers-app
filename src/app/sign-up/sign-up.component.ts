import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss'],
})
export class SignUpComponent {
  constructor (private router: Router) {};
  
  termos(){
    this.router.navigate(['/tabs/tabs4/terms']);
  }
  fazerLogin(){
    this.router.navigate(['/login']);
  }
  fazerCadastro(){
    this.router.navigate(['/register']);
  }
 
}
