import { Component, OnInit } from '@angular/core';
import { FormGroup,Validators } from "@angular/forms"
import { User } from './user.model';

@Component({
    selector: 'app-lessThanEqualTo-value-template-driven-validation-decorators',
    templateUrl: './less-than-equal-to-value.component.html'
})
export class LessThanEqualToValueTemplateDrivenValidationDecoratorsComponent implements OnInit {
    user: User
	
    constructor(
    ) { }

    ngOnInit() {
       this.user= new User()
    }
}
