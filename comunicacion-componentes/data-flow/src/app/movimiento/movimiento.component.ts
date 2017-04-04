import { Component, OnInit } from '@angular/core';
import { MovimientosService, MovimientoModel } from '../shared/movimientos.service';

@Component({
  selector: 'app-movimiento',
  templateUrl: './movimiento.component.html',
  styleUrls: ['./movimiento.component.css'],
  providers: [
                { provide: MovimientosService, 
                  useClass: MovimientosService
                },
                { provide:MovimientoModel,
                  useValue:{  _id: new Date().toDateString(),
                              tipo: "Ingreso",
                              categoria:"Nomina",
                              fecha: new Date(),
                              importe: 0
                            }
                }
              ]
  
})

export class MovimientoComponent implements OnInit {

  
  sentidoOrden: number = 1
  
  constructor(
              private movimientosService : MovimientosService,
              private movimiento: MovimientoModel
  ){ }

  
  
  ngOnInit() {}

  

  ordenarPor(campo: string){
    this.sentidoOrden = -1 * this.sentidoOrden;
    this.movimientosService.movimientos.sort((a,b) => a[campo]< b[campo] ? this.sentidoOrden : -1*this.sentidoOrden);
  }

  fecha(cadena){
    return new Date(cadena);
  }
 
}

