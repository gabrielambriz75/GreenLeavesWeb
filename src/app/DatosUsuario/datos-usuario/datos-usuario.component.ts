import { Observable } from 'rxjs';
import { DatosUsuarioService } from './datos-usuario.service';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import {
  MomentDateAdapter,
  MAT_MOMENT_DATE_ADAPTER_OPTIONS,
} from '@angular/material-moment-adapter';
import {
  DateAdapter,
  MAT_DATE_FORMATS,
  MAT_DATE_LOCALE,
} from '@angular/material/core';
import { MatDialog } from '@angular/material/dialog';
import { ModalDatosUsuarioInvalidoComponent } from './modal-datos-usuario-invalido/modal-datos-usuario-invalido/modal-datos-usuario-invalido.component';

interface LocationCmb {
  idCiudad: number;
  locacionCompleta: string;
}

// import * as _moment from 'moment';

// import {default as _rollupMoment} from 'moment';

// const moment = _rollupMoment || _moment;

export const MY_FORMATS = {
  parse: {
    dateInput: 'DD MMM YYY',
  },
  display: {
    dateInput: 'LL',
    monthYearLabel: 'DD MMM YYYY',
    dateA11yLabel: 'LL',
    monthYearA11yLabel: 'DD MMMM YYYY',
  },
};

@Component({
  selector: 'app-datos-usuario',
  templateUrl: './datos-usuario.component.html',
  styleUrls: ['./datos-usuario.component.css'],
  providers: [
    { provide: MAT_DATE_LOCALE, useValue: 'es-Es' },
    {
      provide: DateAdapter,
      useClass: MomentDateAdapter,
      deps: [MAT_DATE_LOCALE, MAT_MOMENT_DATE_ADAPTER_OPTIONS],
    },

    { provide: MAT_DATE_FORMATS, useValue: MY_FORMATS },
  ],
})
export class DatosUsuarioComponent implements OnInit {
  formUsuario: FormGroup;
  locacionCmb$: Observable<LocationCmb[]>;

  constructor(
    public dialog: MatDialog,
    private datosUsuarioService: DatosUsuarioService
  ) {}

  ngOnInit(): void {
    this.formUsuario = new FormGroup({
      nombre: new FormControl('', Validators.required),
      mail: new FormControl('', [
        Validators.required,
        Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$'),
      ]),
      telefono: new FormControl('', [
        Validators.required,
        Validators.pattern(
          '^([+]?[s0-9]+)?(d{3}|[(]?[0-9]+[)])?([-]?[s]?[0-9])+$'
        ),
      ]),
      fecha: new FormControl('', Validators.required),
      ciudadEstado: new FormControl('', Validators.required),
    });
  }

  obtenerLocacion(event) {
    const keyCodeUpArrow = 38;
    const keyCodeDownArrow = 40;

    if (
      event.keyCode !== keyCodeUpArrow &&
      event.keyCode !== keyCodeDownArrow
    ) {
      if (event.target.value.length >= 3) {
        this.locacionCmb$ = this.datosUsuarioService.obtenerLocacion(
          event.target.value
        );
      }
    }

    // this.datosUsuarioService.obtenerLocacion(nombreCiudad).subscribe((data) => {
    //   console.log(data);
    // });
  }

  enviarDatos() {
    if (this.formUsuario.valid) {
      console.log('Bien');
    } else {
      this.dialog.open(ModalDatosUsuarioInvalidoComponent, {
        data: this.formUsuario,
      });
      const dataUsuario = this.formUsuario.getRawValue();
      console.log('No es valido prro.');
      console.log(dataUsuario);
    }
  }
}
