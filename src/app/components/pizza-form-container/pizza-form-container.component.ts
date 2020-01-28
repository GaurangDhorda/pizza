import { Component, OnInit } from '@angular/core';
import { PizzaFormService } from '../services/pizza-form.service';
import { PizzaFormValidatorsService } from '../services/pizza-form-validators.service';
import { FormGroup, AbstractControl } from '@angular/forms';

@Component({
  selector: 'app-pizza-form-container',
  templateUrl: './pizza-form-container.component.html',
  styleUrls: ['./pizza-form-container.component.css'],
  providers: [PizzaFormService, PizzaFormValidatorsService]
})
export class PizzaFormContainerComponent implements OnInit {
  get form(): FormGroup {
    return this.pfService.form;
  }

  get selectedPizzaGroup(): AbstractControl {
    if (!this.pfService.pizzasArray.length) { return; }

    return this.pfService.pizzasArray.at(this.form.get('selectedPizza').value);
  }
  constructor(private pfService: PizzaFormService) { }

  ngOnInit() {
    this.pfService.hello();
  }
  onPizzaAdd() {
    this.pfService.addPizza();
    this.pfService.selectPizzaForEdit(this.pfService.pizzasArray.length - 1);
  }
}
