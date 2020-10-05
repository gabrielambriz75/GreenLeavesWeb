import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DatosUsuarioEnviadoComponent } from './datos-usuario-enviado.component';

describe('DatosUsuarioEnviadoComponent', () => {
  let component: DatosUsuarioEnviadoComponent;
  let fixture: ComponentFixture<DatosUsuarioEnviadoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DatosUsuarioEnviadoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DatosUsuarioEnviadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
