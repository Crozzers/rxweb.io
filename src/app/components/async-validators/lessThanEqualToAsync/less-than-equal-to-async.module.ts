import { NgModule} from '@angular/core';
import { RouterModule } from '@angular/router';
import { LESS_THAN_EQUAL_TO_ASYNC_COMPONENT_EXAMPLE_CONSTANT } from "src/app/components/async-validators/lessThanEqualToAsync/less-than-equal-to-async.constants";
import { COMPONENT_EXAMPLE } from "src/app/domain/application.const";
import { LESS_THAN_EQUAL_TO_ASYNC_ROUTING } from "src/app/components/async-validators/lessThanEqualToAsync/less-than-equal-to-async.routing";
import { PageModule } from "src/app/components/page/page.module";
import { LessThanAsyncValidatorsExtendedModule } from 'src/assets/examples/reactive-form-validators/validators/lessThanAsync/less-than-async-validators-extended.module';
import { LessThanAsyncDecoratorsExtendedModule } from 'src/assets/examples/reactive-form-validators/decorators/lessThanAsync/less-than-async-decorators-extended.module';



@NgModule({
  imports: [LESS_THAN_EQUAL_TO_ASYNC_ROUTING , LessThanAsyncValidatorsExtendedModule, LessThanAsyncDecoratorsExtendedModule, PageModule],
  exports: [RouterModule],
    providers:[{ provide: COMPONENT_EXAMPLE, useValue: LESS_THAN_EQUAL_TO_ASYNC_COMPONENT_EXAMPLE_CONSTANT }]
  })
export class LessThanEqualToAsyncModule { }


