import { Component, OnInit } from '@angular/core';
import { FormGroup } from "@angular/forms"
import { RxFormBuilder } from '@rxweb/reactive-form-validators';

import { UserInfo } from './user-info.model';

@Component({
    selector: 'app-numericAsync-allowDecimal',
    templateUrl: './numeric-async-allow-decimal.component.html'
})
export class NumericAsyncAllowDecimalComponent implements OnInit {
    userInfoFormGroup: FormGroup

    constructor(
        private formBuilder: RxFormBuilder    ) { }

    ngOnInit() {
        let userInfo = new UserInfo();
        this.userInfoFormGroup = this.formBuilder.formGroup(userInfo);
    }
}
