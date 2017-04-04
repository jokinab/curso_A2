import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MovimientoEditorComponent } from './movimiento-editor.component';

describe('MovimientoEditorComponent', () => {
  let component: MovimientoEditorComponent;
  let fixture: ComponentFixture<MovimientoEditorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MovimientoEditorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MovimientoEditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
