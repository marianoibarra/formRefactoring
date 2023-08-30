import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { MatRadioModule } from '@angular/material/radio';
import { MatCardModule } from '@angular/material/card';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormularioSinSeccionarComponent } from './formulario-sin-seccionar/formulario-sin-seccionar.component';
import { MatTabsModule } from '@angular/material/tabs';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatGridListModule } from '@angular/material/grid-list';
import { LayoutModule } from '@angular/cdk/layout';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { FormularioSeccionadoComponent } from './formulario-seccionado/formulario-seccionado.component';
import { ContactoFormSectionComponent } from './formulario-seccionado/contacto-form-section/contacto-form-section.component';
import { DireccionFormSectionComponent } from './formulario-seccionado/direccion-form-section/direccion-form-section.component';
import { ProductosFormSectionComponent } from './formulario-seccionado/productos-form-section/productos-form-section.component';
import { BotoneraComponent } from './formulario-seccionado/botonera/botonera.component';

@NgModule({
  declarations: [AppComponent, FormularioSinSeccionarComponent, FormularioSeccionadoComponent, ContactoFormSectionComponent, DireccionFormSectionComponent, ProductosFormSectionComponent, BotoneraComponent],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatButtonModule,
    MatSelectModule,
    MatRadioModule,
    MatCardModule,
    MatIconModule,
    ReactiveFormsModule,
    MatTabsModule,
    MatExpansionModule,
    MatGridListModule,
    LayoutModule,
    MatProgressBarModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
