import { Component, OnInit } from '@angular/core';
import { FormGroup } from "@angular/forms"
import { RxFormBuilder } from '@rxweb/reactive-form-validators';

import { CompanyInfo } from './company-info.model';

@Component({
    selector: 'app-cusip-conditionalExpression',
    templateUrl: './cusip-conditional-expression.component.html'
})
export class CusipConditionalExpressionComponent implements OnInit {
    companyInfoFormGroup: FormGroup
				companyNames = [ "Google", "Microsoft",];

    constructor(
        private formBuilder: RxFormBuilder    ) { }

    ngOnInit() {
        let companyInfo = new CompanyInfo();
        this.companyInfoFormGroup = this.formBuilder.formGroup(companyInfo);
    }
}
