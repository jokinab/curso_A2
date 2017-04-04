import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { MovimientoComponent } from './movimiento/movimiento.component';
import { MovimientoEditorComponent } from './movimiento/movimiento-editor/movimiento-editor.component';

@NgModule({
  declarations: [
    AppComponent,
    MovimientoComponent,
    MovimientoEditorComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
