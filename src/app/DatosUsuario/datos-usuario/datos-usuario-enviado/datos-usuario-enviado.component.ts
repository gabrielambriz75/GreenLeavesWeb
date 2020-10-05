import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-datos-usuario-enviado',
  templateUrl: './datos-usuario-enviado.component.html',
  styleUrls: ['./datos-usuario-enviado.component.css']
})
export class DatosUsuarioEnviadoComponent implements OnInit {
  @Input()
  datosU: any;

  constructor() {}

  ngOnInit(): void {
  }

}
