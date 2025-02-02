import {  extension,prop, } from   "@rxweb/reactive-form-validators"   

export class UserInfo {

	@prop()
	fileType: string;

	@prop()
	profilePicture: string;

	@prop()
	profileImage: string;

	@prop()
	imageFile: string;

	@prop()
	contactFile: string;

	@prop()
	excelFile: string;

}
