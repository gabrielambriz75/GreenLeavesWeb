import { HttpClient, HttpClientModule } from '@angular/common/http';
import { HttpApiService } from './_shared/http/http-api.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DatosUsuarioComponent } from './DatosUsuario/datos-usuario/datos-usuario.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatMomentDateModule } from '@angular/material-moment-adapter';
import {MatSelectModule} from '@angular/material/select';
import { ModalDatosUsuarioInvalidoComponent } from './DatosUsuario/datos-usuario/modal-datos-usuario-invalido/modal-datos-usuario-invalido/modal-datos-usuario-invalido.component';

@NgModule({
  declarations: [
    AppComponent,
    DatosUsuarioComponent,
    ModalDatosUsuarioInvalidoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatInputModule,
    MatNativeDateModule,
    MatMomentDateModule,
    HttpClientModule,
    MatSelectModule
  ],
  providers: [
    MatNativeDateModule,
    MatDatepickerModule,
    {
      provide: HttpApiService,
      deps: [HttpClient]
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
