import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalDatosUsuarioInvalidoComponent } from './modal-datos-usuario-invalido.component';

describe('ModalDatosUsuarioInvalidoComponent', () => {
  let component: ModalDatosUsuarioInvalidoComponent;
  let fixture: ComponentFixture<ModalDatosUsuarioInvalidoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalDatosUsuarioInvalidoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalDatosUsuarioInvalidoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
