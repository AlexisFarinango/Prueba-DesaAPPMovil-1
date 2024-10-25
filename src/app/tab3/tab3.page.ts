import { Component } from '@angular/core';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {
  fecha1: string;
  fecha2: string;
  dias: number | null=null;
  constructor() {
    this.fecha1='';
    this.fecha2='';
  }
  calcularDias(){
    if(this.fecha1 && this.fecha2){
      const date1 = new Date(this.fecha1);
      const date2 = new Date(this.fecha2);

      const diferencia = Math.abs(date2.getTime()-date1.getTime());

      this.dias = Math.ceil(diferencia/(1000*3600*24));
    }else{
      this.dias = null
    }
  }

}
