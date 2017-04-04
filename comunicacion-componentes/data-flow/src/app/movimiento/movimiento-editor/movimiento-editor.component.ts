import { Component, OnInit, Input } from '@angular/core';
import { MovimientoModel, MovimientosService } from '../../shared/movimientos.service';

@Component({
  selector: 'app-movimiento-editor',
  templateUrl: './movimiento-editor.component.html',
  styleUrls: ['./movimiento-editor.component.css']
  //OJO, o hay que meter MovimientosService en providers ya que lo hemos registrado en el padre
  //Para mantener un servicio  Singleton es fundamental incluirlo una sola  vez, sino se crearia 
  //una nueva instancia.
  //,providers:[MovimientosService]
})
export class MovimientoEditorComponent implements OnInit {

  //Si el componente hijo necesita datos del padre, hay que declarar una interfaz a traves de la 
  //cual el padre se comunique con su hijo.
  //Definimos la propiedad : tipo de la propiedad
  //'movimientoParaEditar' es un alias que pongo para no utilizar el nombre 'movimiento'
  @Input('movimientoParaEditar') movimiento:MovimientoModel

  constructor(private movimientosService : MovimientosService) { }

  ngOnInit() {
  }

  guardarMovimiento(){
    this.movimientosService.guardarMovimiento(this.movimiento);
    //Cuando se salva un movimiento se genera uno nuevo para que el usuario pueda seguir trabajando
    this.movimiento = this.nuevoMovimiento();
  }


  nuevoMovimiento(){
    return {
      _id: new Date().toDateString(),
      tipo: "Ingreso",
      categoria:"Nomina",
      fecha: new Date(),
      importe: 0
    }
  }

}
