import { CommonModule } from '@angular/common';
import { NgModule,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { RxReactiveFormsModule } from '@rxweb/reactive-form-validators';

import {RxReactiveDynamicFormsModule} from '@rxweb/reactive-dynamic-forms'


import { ExtensionAsyncCompleteValidatorComponent } from './complete/extension-async-complete.component';
import { ExtensionAsyncExtensionsValidatorComponent } from './extensions/extension-async-extensions.component';
import { ExtensionAsyncMessageValidatorComponent } from './message/extension-async-message.component';
import { ExtensionAsyncMessageKeyValidatorComponent } from './messageKey/extension-async-message-key.component';
import { ExtensionAsyncDynamicValidatorComponent } from './dynamic/extension-async-dynamic.component';
import { ExtensionAsyncAddValidatorComponent } from './add/extension-async-add.component';

@NgModule({
  declarations: [
	ExtensionAsyncCompleteValidatorComponent,
	ExtensionAsyncExtensionsValidatorComponent,
	ExtensionAsyncMessageValidatorComponent,
	ExtensionAsyncMessageKeyValidatorComponent,
	ExtensionAsyncDynamicValidatorComponent,
	ExtensionAsyncAddValidatorComponent,
  ],
entryComponents: [
	ExtensionAsyncCompleteValidatorComponent,
	ExtensionAsyncExtensionsValidatorComponent,
	ExtensionAsyncMessageValidatorComponent,
	ExtensionAsyncMessageKeyValidatorComponent,
	ExtensionAsyncDynamicValidatorComponent,
	ExtensionAsyncAddValidatorComponent,
  ],
  imports: [
    CommonModule,HttpClientModule,ReactiveFormsModule,FormsModule,RxReactiveFormsModule,RxReactiveDynamicFormsModule
  ],
  
 
  providers: [],
  bootstrap: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  exports: [
	ExtensionAsyncCompleteValidatorComponent,
	ExtensionAsyncExtensionsValidatorComponent,
	ExtensionAsyncMessageValidatorComponent,
	ExtensionAsyncMessageKeyValidatorComponent,
	ExtensionAsyncDynamicValidatorComponent,
	ExtensionAsyncAddValidatorComponent,
  ],

})
export class  ExtensionAsyncValidatorsExtendedModule { }
