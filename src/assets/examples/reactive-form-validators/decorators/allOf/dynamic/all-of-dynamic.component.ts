import { Component, OnInit } from '@angular/core';
import { FormGroup } from "@angular/forms"
import { HttpClient } from '@angular/common/http';
import { RxFormBuilder } from '@rxweb/reactive-form-validators';
import { FormBuilderConfiguration,} from '@rxweb/reactive-form-validators';
import { EmployeeInfo } from './employee-info.model';
import { environment } from 'src/environments/environment.prod';


@Component({
    selector: 'app-allOf-dynamic',
    templateUrl: './all-of-dynamic.component.html'
})
export class AllOfDynamicComponent implements OnInit {
    employeeInfoFormGroup: FormGroup

    constructor(
        private formBuilder: RxFormBuilder,private http: HttpClient    ) { }

        qualificationsArray: string[] = [];
        skillsArray: string[] = [];
        hobbiesArray: string[] = [];
        projectDomainsArray : string[] = [];
    
    ngOnInit() {
        let employeeInfo = new EmployeeInfo();
        let formBuilderConfiguration = new FormBuilderConfiguration();
		this.http.get('assets/examples/reactive-form-validators/decorators/allOf/dynamic/dynamic.json?v=' + environment.appVersion).subscribe(dynamic => {
            formBuilderConfiguration.dynamicValidation = JSON.parse(JSON.stringify(dynamic));
			this.employeeInfoFormGroup = this.formBuilder.formGroup(employeeInfo,formBuilderConfiguration);
        })

        this.http.get("assets/examples/reactive-form-validators/decorators/allOf/dynamic/all-of.json?v="+environment.appVersion).subscribe(response => {
            this.qualificationsArray = response['qualificationsArray'];
            this.skillsArray = response['skillsArray'];
            this.hobbiesArray = response['hobbiesArray'];
            this.projectDomainsArray = response['projectDomainsArray'];
        })

        this.employeeInfoFormGroup = this.formBuilder.formGroup(employeeInfo);
    }
    index = 0;
    addProjectDomain(element:any) {
      var value = this.employeeInfoFormGroup.controls.projectDomains.value;
      if(!value)
        value = [];
        if(element.checked) {
              value.push(element.value);
              this.index++;
        }
        else
        {
        var indexOf = value.indexOf(element.value);
        value.splice(indexOf,1);
        }
      this.employeeInfoFormGroup.controls.projectDomains.setValue(value)
    }

    addSkill(element:any) {
        var value = this.employeeInfoFormGroup.controls.skills.value;
        if(!value)
          value = [];
          if(element.checked) {
                value.push(element.value);
                this.index++;
          }
          else
          {
          var indexOf = value.indexOf(element.value);
          value.splice(indexOf,1);
          }
        this.employeeInfoFormGroup.controls.skills.setValue(value)
      }

      addHobby(element:any) {
        var value = this.employeeInfoFormGroup.controls.hobbies.value;
        if(!value)
          value = [];
          if(element.checked) {
                value.push(element.value);
                this.index++;
          }
          else
          {
          var indexOf = value.indexOf(element.value);
          value.splice(indexOf,1);
          }
        this.employeeInfoFormGroup.controls.hobbies.setValue(value)
      }
}
