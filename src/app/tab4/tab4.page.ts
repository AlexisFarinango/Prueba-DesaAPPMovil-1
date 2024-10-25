import { Component } from '@angular/core';

@Component({
  selector: 'app-tab4',
  templateUrl: 'tab4.page.html',
  styleUrls: ['tab4.page.scss']
})
export class Tab4Page {

  a: number = 0;
  b: number = 0;
  c: number = 0;
  resultado: string = '';

  calcularRaices(){
    const D = this.b **2-4*this.a*this.c;

    if(this.a ===0){
      this.resultado = "El valor de a no puede ser 0.";
      return;
    }

    if(D>0){
      const r1 = (-this.b+Math.sqrt(D))/(2*this.a);
      const r2 = (-this.b-Math.sqrt(D))/(2*this.a);

      this.resultado = `Las raices son: ${r1} y ${r2}`;
    }else if(D===0){
      const r = -this.b/(2*this.a);
      this.resultado=`La raíz doble es: ${r}`;
    }else{
      this.resultado = "Las raices son complejas"
    }
  }

}
