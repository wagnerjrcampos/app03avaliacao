import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { PerfilProvider } from '../../providers/perfil/perfil';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {

  constructor(public navCtrl: NavController, perfilProvider: PerfilProvider) {
    
  }
}
