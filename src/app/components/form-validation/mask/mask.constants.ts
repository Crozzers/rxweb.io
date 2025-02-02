import { MaskCompleteComponent } from "src/assets/examples/reactive-form-validators/decorators/mask/complete/mask-complete.component";

import { MaskCompleteValidatorComponent } from "src/assets/examples/reactive-form-validators/validators/mask/complete/mask-complete.component";
import { MaskMaskComponent } from "src/assets/examples/reactive-form-validators/decorators/mask/mask/mask-mask.component";

import { MaskMaskValidatorComponent } from "src/assets/examples/reactive-form-validators/validators/mask/mask/mask-mask.component";
import { MaskValueWithMaskComponent } from "src/assets/examples/reactive-form-validators/decorators/mask/valueWithMask/mask-value-with-mask.component";

import { MaskValueWithMaskValidatorComponent } from "src/assets/examples/reactive-form-validators/validators/mask/valueWithMask/mask-value-with-mask.component";
import { MaskConditionalExpressionComponent } from "src/assets/examples/reactive-form-validators/decorators/mask/conditionalExpression/mask-conditional-expression.component";

import { MaskConditionalExpressionValidatorComponent } from "src/assets/examples/reactive-form-validators/validators/mask/conditionalExpression/mask-conditional-expression.component";
import { MaskMessageComponent } from "src/assets/examples/reactive-form-validators/decorators/mask/message/mask-message.component";

import { MaskMessageValidatorComponent } from "src/assets/examples/reactive-form-validators/validators/mask/message/mask-message.component";
import { MaskMinLengthComponent } from "src/assets/examples/reactive-form-validators/decorators/mask/minLength/mask-min-length.component";

import { MaskMinLengthValidatorComponent } from "src/assets/examples/reactive-form-validators/validators/mask/minLength/mask-min-length.component";
import { MaskMessageKeyComponent } from "src/assets/examples/reactive-form-validators/decorators/mask/messageKey/mask-message-key.component";

import { MaskMessageKeyValidatorComponent } from "src/assets/examples/reactive-form-validators/validators/mask/messageKey/mask-message-key.component";
import { MaskDynamicComponent } from "src/assets/examples/reactive-form-validators/decorators/mask/dynamic/mask-dynamic.component";
import { MaskDynamicValidatorComponent } from "src/assets/examples/reactive-form-validators/validators/mask/dynamic/mask-dynamic.component";
import { MaskAddComponent } from "src/assets/examples/reactive-form-validators/decorators/mask/add/mask-add.component";

import { MaskAddValidatorComponent } from "src/assets/examples/reactive-form-validators/validators/mask/add/mask-add.component";
import { MaskEditComponent } from "src/assets/examples/reactive-form-validators/decorators/mask/edit/mask-edit.component";

export const MASK_COMPONENT_EXAMPLE_CONSTANT: { [key: string]: any } = {
	decorators:{
						complete : MaskCompleteComponent,
						mask : MaskMaskComponent,
						valueWithMask : MaskValueWithMaskComponent,
						conditionalExpression : MaskConditionalExpressionComponent,
						message : MaskMessageComponent,
						minLength : MaskMinLengthComponent,
						messageKey : MaskMessageKeyComponent,
						dynamic : MaskDynamicComponent,
						add : MaskAddComponent,
						edit : MaskEditComponent,
			  },
	
	validators:{
						complete : MaskCompleteValidatorComponent,
						mask : MaskMaskValidatorComponent,
						valueWithMask : MaskValueWithMaskValidatorComponent,
						conditionalExpression : MaskConditionalExpressionValidatorComponent,
						message : MaskMessageValidatorComponent,
						minLength : MaskMinLengthValidatorComponent,
						messageKey : MaskMessageKeyValidatorComponent,
						dynamic : MaskDynamicValidatorComponent,
						add : MaskAddValidatorComponent,
			  },
}
