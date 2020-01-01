import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import {
  MatButtonModule,
  MatCheckboxModule,
  MatFormFieldModule,
  MatIconModule,
  MatInputModule,
  MatListModule,
  MatSelectModule,
  MatToolbarModule
} from '@angular/material';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PizzaFormContainerComponent } from './components/pizza-form-container/pizza-form-container.component';


export const APP_MODULE_DECLARATIONS = [
  AppComponent,
  PizzaFormContainerComponent
];

export const APP_MODULE_IMPORTS = [
  ReactiveFormsModule,
  FormsModule,
  MatButtonModule,
  MatInputModule,
  MatFormFieldModule,
  MatSelectModule,
  MatCheckboxModule,
  MatIconModule,
  MatListModule,
  MatToolbarModule,
  BrowserModule,
  BrowserAnimationsModule
];