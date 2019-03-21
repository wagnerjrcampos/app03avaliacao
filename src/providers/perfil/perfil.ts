import { Injectable } from '@angular/core';

@Injectable()
export class PerfilProvider {

  constructor() {}

  setFavoritos(id){
    let favoritos = [];
    favoritos.push(id);
    localStorage.setItem("favoritos", JSON.stringify(favoritos));
  }

}
