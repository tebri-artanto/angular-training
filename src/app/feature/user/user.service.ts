import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { }

  getUserData(){
    return {
      name: "tebri",
      age: "22",
      university: "Atma jaya Yogyakarta",
      img: "3D_Animation_Style_Master_professional_photography_spiderman_e_2.jpg",
      skill: ["Node js", "Angular"]
    }
  }
}
