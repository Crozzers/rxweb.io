import { NgModule} from '@angular/core';
import { RouterModule } from '@angular/router';
import { GREATER_THAN_EQUAL_TO_ASYNC_COMPONENT_EXAMPLE_CONSTANT } from "src/app/components/async-validators/greaterThanEqualToAsync/greater-than-equal-to-async.constants";
import { COMPONENT_EXAMPLE } from "src/app/domain/application.const";
import { GREATER_THAN_EQUAL_TO_ASYNC_ROUTING } from "src/app/components/async-validators/greaterThanEqualToAsync/greater-than-equal-to-async.routing";
import { PageModule } from "src/app/components/page/page.module";
import { GreaterThanValidatorsExtendedModule } from 'src/assets/examples/reactive-form-validators/validators/greaterThan/greater-than-validators-extended.module';
import { GreaterThanDecoratorsExtendedModule } from 'src/assets/examples/reactive-form-validators/decorators/greaterThan/greater-than-decorators-extended.module';



@NgModule({
  imports: [GREATER_THAN_EQUAL_TO_ASYNC_ROUTING , GreaterThanValidatorsExtendedModule, GreaterThanDecoratorsExtendedModule, PageModule],
  exports: [RouterModule],
    providers:[{ provide: COMPONENT_EXAMPLE, useValue: GREATER_THAN_EQUAL_TO_ASYNC_COMPONENT_EXAMPLE_CONSTANT }]
  })
export class GreaterThanEqualToAsyncModule { }


