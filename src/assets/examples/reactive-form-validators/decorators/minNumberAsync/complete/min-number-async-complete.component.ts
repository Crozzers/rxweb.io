import { Component, OnInit } from '@angular/core';
import { FormGroup } from "@angular/forms"
import { RxFormBuilder } from '@rxweb/reactive-form-validators';

import { ResultInfo } from './result-info.model';

@Component({
    selector: 'app-minNumberAsync-complete',
    templateUrl: './min-number-async-complete.component.html'
})
export class MinNumberAsyncCompleteComponent implements OnInit {
    resultInfoFormGroup: FormGroup

    constructor(
        private formBuilder: RxFormBuilder    ) { }

    ngOnInit() {
        let resultInfo = new ResultInfo();
        this.resultInfoFormGroup = this.formBuilder.formGroup(resultInfo);
    }
}
