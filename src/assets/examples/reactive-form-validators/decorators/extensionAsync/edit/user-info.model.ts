import {  extensionAsync, } from   "@rxweb/reactive-form-validators"   
import { of } from 'rxjs'; 

export class UserInfo {

	@extensionAsync({validatorConfig:of({extensions:['jpg','bmp']}) })
	profilePicture: string;
	
	
}
