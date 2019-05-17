import { CommonModule } from '@angular/common';
import { NgModule,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RxReactiveFormsModule } from '@rxweb/reactive-form-validators';
import { DirtyCompleteComponent } from './complete/dirty-check-complete.component';
import { DirtyModifiedComponent } from './modified/dirty-modified.component';




@NgModule({
  declarations: [
    DirtyCompleteComponent,DirtyModifiedComponent
  ],
entryComponents: [
	DirtyCompleteComponent,DirtyModifiedComponent
  ],
  imports: [
    CommonModule,HttpClientModule,ReactiveFormsModule,FormsModule,RxReactiveFormsModule
  ],
  providers: [],
  bootstrap: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  exports: [
    DirtyCompleteComponent,DirtyModifiedComponent
  ],

})
export class  DirtyCheckDecoratorsExtendedModule { }