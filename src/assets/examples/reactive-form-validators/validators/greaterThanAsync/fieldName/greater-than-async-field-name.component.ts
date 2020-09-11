import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from "@angular/forms"
import { of } from 'rxjs';
import { RxwebValidators } from '@rxweb/reactive-form-validators';

@Component({
    selector: 'app-greaterThanAsync-fieldName-validator',
    templateUrl: './greater-than-async-field-name.component.html'
})
export class GreaterThanAsyncFieldNameValidatorComponent implements OnInit {
    userFormGroup: FormGroup

	constructor(
        private formBuilder: FormBuilder )
	{ }

    ngOnInit() {
        this.userFormGroup = this.formBuilder.group({
            age:['',[],], 
            retiermentAge:['',[], RxwebValidators.greaterThanAsync({validatorConfig:of({fieldName:'age' })})], 
        });
    }
}
