import { FormControlConfig } from "@rxweb/reactive-dynamic-forms";
import { AbstractControl } from "@angular/forms"
export class AsyncCustomValidation extends FormControlConfig {

    asyncValidator = (control: AbstractControl) => {
        let promise = new Promise<any>((resolve, reject) => {
          debugger;
            if(control.value == "India")
                resolve(null);
            else
                resolve({ custom: {message:"Indian nationality required"}})
        });
        return promise;
    }

}