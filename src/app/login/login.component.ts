import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { Router } from '@angular/router';


@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {

  constructor (private router: Router) {};
  

  fazerLogin(){
    this.router.navigate(['/tabs']);
  }
  
  fazerCadastro(){
    this.router.navigate(['/sign-up']);
  }
}
