import { Injectable } from '@angular/core';
import {FormGroup, FormBuilder, Validators, FormArray} from '@angular/forms';
import { PizzaToppingsEnum, PizzaSizeEnum, IToppingItem } from './pizza-form.interface';
import { PizzaFormValidatorsService } from './pizza-form-validators.service';

@Injectable()
export class PizzaFormService {
    public availableToppings = [...Object.values(PizzaToppingsEnum)];
    public form: FormGroup;

    constructor(private fb: FormBuilder , private pizzaValidatorsService: PizzaFormValidatorsService){
        this.form = this.fb.group({
            selectedPizza : null,
            pizzas : this.fb.array([]),
            customerDetails: this.fb.group({
                firstName : [null, Validators.required],
                lastName : [null, Validators.required],
                phoneNumber : [null, Validators.required],
                address : this.fb.group({
                    street : [null, Validators.required],
                    houseNum : [null, Validators.required],
                    city : [null, Validators.required],
                    floor : [null, Validators.required]
                })
            })
        }, {validators : this.pizzaValidatorsService.formValidator()})
    }
    selectPizzaForEdit(index: number) {
        this.form.get('selectedPizza').setValue(index);
    }
    get pizzasArray(): FormArray {
        return this.form.get('pizzas') as FormArray;
    }
    addPizza(): FormGroup {
        const pizzaGroup = this.getPizzaFormGroup();
        this.pizzasArray.push(this.getPizzaFormGroup());
    
        this.form.markAsDirty();
    
        return pizzaGroup;
    }
    getPizzaFormGroup(size: PizzaSizeEnum = PizzaSizeEnum.MEDIUM): FormGroup {
        return this.fb.group({
          size: [size],
          toppings: this.mapToCheckboxArrayGroup(this.availableToppings)
        }, {
          validator: this.pizzaValidatorsService.pizzaItemValidator()
        });
    }
    private mapToCheckboxArrayGroup(data: string[]): FormArray {
        return this.fb.array(data.map((i) => {
          return this.fb.group({
            name: i,
            selected: false
          });
        }));
      }
      getSelectedToppings(toppings: IToppingItem[]): IToppingItem[] {
        return toppings.filter(i => i.selected);
      }
hello(){
    console.log(this.availableToppings)
}    

}
