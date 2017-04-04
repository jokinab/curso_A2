import { Injectable } from '@angular/core';


@Injectable()
export class MovimientosService {
  
  categoriasIngreso: string[] = ['Nomina','Venta','Interes','Impuesto']  
  categoriasGasto: string[] = ['Hipoteca','Compra','Interes','Impuesto']
  ingresos: number = 0
  gastos: number = 0
  balance: number = 0
  movimientos: MovimientoModel[] = []
  
  constructor() { }

  guardarMovimiento(movimiento : MovimientoModel){
    if (movimiento.tipo==='Ingreso'){
      this.ingresos += movimiento.importe;
    }else{
      this.gastos += movimiento.importe;
    }
    this.balance = this.ingresos - this.gastos;
    this.movimientos.push(Object.assign({},movimiento));
  }

}

@Injectable()
export class MovimientoModel{
  _id: string;
  tipo: string;
  categoria: string;
  fecha: Date;
  importe: number;
}

