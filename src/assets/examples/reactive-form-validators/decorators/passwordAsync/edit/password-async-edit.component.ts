import { Component, OnInit } from '@angular/core';
import { FormGroup } from "@angular/forms"
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { RxFormBuilder } from '@rxweb/reactive-form-validators';

import { LoginInfo } from './login-info.model';

@Component({
    selector: 'app-passwordAsync-edit',
    templateUrl: './password-async-edit.component.html'
})
export class PasswordAsyncEditComponent implements OnInit {
    loginInfoFormGroup: FormGroup

    constructor(
        private formBuilder: RxFormBuilder,private http: HttpClient    ) { }

    ngOnInit() {
        this.http.get('assets/examples/reactive-form-validators/decorators/passwordAsync/edit/login-info-data.json?v=' + environment.appVersion).subscribe(loginInfo => {
            this.loginInfoFormGroup = this.formBuilder.formGroup<LoginInfo>(LoginInfo,loginInfo);
        })
    }
}
