import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { APP_MODULE_DECLARATIONS, APP_MODULE_IMPORTS } from './app.module.dependencies';
import { SelectedpizzaviewerComponent } from './components/selectedpizzaviewer/selectedpizzaviewer.component';
import { PizzaSizePickerComponent } from './components/pizza-size-picker/pizza-size-picker.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { CustomerDetailsComponent } from './components/customer-details/customer-details.component';
import { PizzaListComponent } from './components/pizza-list/pizza-list.component';

@NgModule({
  declarations: [...APP_MODULE_DECLARATIONS, SelectedpizzaviewerComponent, PizzaSizePickerComponent, NavbarComponent, CustomerDetailsComponent, PizzaListComponent],
  imports: [...APP_MODULE_IMPORTS],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }