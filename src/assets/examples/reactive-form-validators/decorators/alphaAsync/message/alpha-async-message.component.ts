import { Component, OnInit } from '@angular/core';
import { FormGroup } from "@angular/forms"
import { RxFormBuilder } from '@rxweb/reactive-form-validators';

import { AddressInfo } from './address-info.model';

@Component({
    selector: 'app-alphaAsync-message',
    templateUrl: './alpha-async-message.component.html'
})
export class AlphaAsyncMessageComponent implements OnInit {
    addressInfoFormGroup: FormGroup

    constructor(
        private formBuilder: RxFormBuilder    ) { }

    ngOnInit() {
        let addressInfo = new AddressInfo();
        this.addressInfoFormGroup = this.formBuilder.formGroup(addressInfo);
    }
}
