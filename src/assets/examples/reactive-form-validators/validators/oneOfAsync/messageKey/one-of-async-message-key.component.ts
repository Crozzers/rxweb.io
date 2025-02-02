import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder} from "@angular/forms"
import { of } from 'rxjs';
import { RxFormBuilder, RxwebValidators } from '@rxweb/reactive-form-validators';

import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-oneOf-messageKey-validator',
  templateUrl: './one-of-async-message-key.component.html'
})
export class OneOfAsyncMessageKeyValidatorComponent implements OnInit {
  employeeInfoFormGroup: FormGroup
  languages: string[] = [];

  constructor(
    private formBuilder: FormBuilder, private http: HttpClient) { }

  languagesArray: string[] = ["English", "Spanish", "French", "German", "Chinese"];

  ngOnInit() {
    this.employeeInfoFormGroup = this.formBuilder.group({
      languages: ['',[], RxwebValidators.oneOfAsync({validatorConfig:of({ matchValues: ["English", "Spanish", "French", "German", "Chinese"], messageKey: 'oneOfMessageKey' })})]
    });
  }

  addLanguage(element: any, index: number) {
    var indexOf = this.languages.indexOf(element.value);
    element.checked ? this.languages.push(element.value) : this.languages.splice(indexOf, 1);
    this.employeeInfoFormGroup.controls.languages.setValue(this.languages);
  }
}
