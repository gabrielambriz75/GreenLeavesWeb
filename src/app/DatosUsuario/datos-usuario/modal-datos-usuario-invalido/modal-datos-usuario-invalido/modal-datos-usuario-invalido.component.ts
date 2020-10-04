import { Component, Inject, OnInit, Optional } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-modal-datos-usuario-invalido',
  templateUrl: './modal-datos-usuario-invalido.component.html',
  styleUrls: ['./modal-datos-usuario-invalido.component.css'],
})
export class ModalDatosUsuarioInvalidoComponent implements OnInit {
  constructor(
    public dialogRef: MatDialogRef<ModalDatosUsuarioInvalidoComponent>,
    @Optional()
    @Inject(MAT_DIALOG_DATA)
    public data: FormGroup
  ) {}

  ngOnInit(): void {
    console.log(this.data.getRawValue());
    console.log('Hola', this.data.get('mail').errors);
  }
  cerrarModal() {
    this.dialogRef.close();
  }
}
