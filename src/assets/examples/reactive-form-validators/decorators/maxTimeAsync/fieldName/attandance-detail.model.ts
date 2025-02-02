import {  maxTimeAsync, } from   "@rxweb/reactive-form-validators"   
import { of } from 'rxjs'; 

export class AttandanceDetail {

	@maxTimeAsync({validatorConfig:of({value:'23:30'}) })
	closingTime: string;
	
	
	@maxTimeAsync({validatorConfig:of({message:'You can enter only time format data'  ,fieldName:'closingTime'}) })
	exitTime: string;
	
	
}
