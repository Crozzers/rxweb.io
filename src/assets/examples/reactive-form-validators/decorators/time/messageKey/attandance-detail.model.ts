import {  time, } from   "@rxweb/reactive-form-validators"   

export class AttandanceDetail {

	@time({messageKey:'timeMessageKey' }) 
	netInTime: string;
	
	
}
