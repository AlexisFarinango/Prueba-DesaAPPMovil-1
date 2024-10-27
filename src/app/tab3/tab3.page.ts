import { Component } from '@angular/core';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {
  fecha1: string;
  fecha2: string;
  dias: number | null = null;

  constructor() {
    // Asignar fechas por defecto (hoy)
    const hoy = new Date().toISOString().split('T')[0]; // Obtener solo la fecha en formato ISO (YYYY-MM-DD)
    this.fecha1 = hoy;
    this.fecha2 = hoy; // Puedes cambiar esta por otro valor si lo deseas
  }

  calcularDias() {
    console.log('Fecha 1:', this.fecha1); // Verifica si las fechas están correctamente
    console.log('Fecha 2:', this.fecha2);

    if (this.fecha1 && this.fecha2) {
      const date1 = new Date(this.fecha1);
      const date2 = new Date(this.fecha2);

      // Verificar si las fechas son válidas
      if (!isNaN(date1.getTime()) && !isNaN(date2.getTime())) {
        const diferencia = Math.abs(date2.getTime() - date1.getTime());
        this.dias = Math.ceil(diferencia / (1000 * 3600 * 24));
      } else {
        console.log("Una o ambas fechas no son válidas");
        this.dias = null;
      }
    } else {
      this.dias = null;
    }

    console.log('Días calculados:', this.dias);
  }
}
