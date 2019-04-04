import { Component, OnInit } from '@angular/core';
import { FormGroup } from "@angular/forms"
import { RxFormBuilder } from '@rxweb/reactive-form-validators';

import { HexcolorInfo } from './hexcolor-info.model';

@Component({
    selector: 'app-hexColor-messageKey',
    templateUrl: './hex-color-message-key.component.html'
})
export class HexColorMessageKeyComponent implements OnInit {
    hexcolorInfoFormGroup: FormGroup

    constructor(
        private formBuilder: RxFormBuilder    ) { }

    ngOnInit() {
        let hexcolorInfo = new HexcolorInfo();
        this.hexcolorInfoFormGroup = this.formBuilder.formGroup(hexcolorInfo);
    }
}
