import { Component, OnInit } from '@angular/core';
import { FormGroup } from "@angular/forms"
import { RxFormBuilder } from '@rxweb/reactive-form-validators';

import { EmployeeInfo } from './employee-info.model';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Component({
    selector: 'app-choice-conditionalExpression',
    templateUrl: './choice-conditional-expression.component.html'
})
export class ChoiceConditionalExpressionComponent implements OnInit {
    employeeInfoFormGroup: FormGroup

    selectedQualifications: string[] = [];
    selectedSkills: string[] = [];

    constructor(
        private formBuilder: RxFormBuilder, private http: HttpClient) { }

    qualificationsArray: string[] = [];
    skillsArray: string[] = [];

    ngOnInit() {
        let employeeInfo = new EmployeeInfo();
        this.http.get("assets/examples/reactive-form-validators/decorators/choice/conditionalExpression/choice.json?v="+environment.appVersion).subscribe(response => {
            this.qualificationsArray = response['qualificationsArray'];
            this.skillsArray = response['skillsArray'];
        })

        this.employeeInfoFormGroup = this.formBuilder.formGroup(employeeInfo);
    }

    addQualification(element: any, index: number) {
        element.checked ? this.selectedQualifications.push(element.value) : this.selectedQualifications.splice(index, 1);
        this.employeeInfoFormGroup.controls.qualifications.setValue(this.selectedQualifications);
    }
    
    addSkill(element: any, index: number) {
        element.checked ? this.selectedSkills.push(element.value) : this.selectedSkills.splice(index, 1);
        this.employeeInfoFormGroup.controls.skills.setValue(this.selectedSkills);
    }

}
