import { NgModule} from '@angular/core';
import { RouterModule } from '@angular/router';
import { NONE_OF_ASYNC_COMPONENT_EXAMPLE_CONSTANT } from "src/app/components/async-validators/noneOfAsync/none-of-async.constants";
import { COMPONENT_EXAMPLE } from "src/app/domain/application.const";
import { NONE_OF_ASYNC_ROUTING } from "src/app/components/async-validators/noneOfAsync/none-of-async.routing";
import { PageModule } from "src/app/components/page/page.module";
import { NoneOfAsyncValidatorsExtendedModule } from 'src/assets/examples/reactive-form-validators/validators/noneOfAsync/none-of-async-validators-extended.module';
import { NoneOfAsyncDecoratorsExtendedModule } from 'src/assets/examples/reactive-form-validators/decorators/noneOfAsync/none-of-async-decorators-extended.module';



@NgModule({
  imports: [NONE_OF_ASYNC_ROUTING , NoneOfAsyncValidatorsExtendedModule, NoneOfAsyncDecoratorsExtendedModule, PageModule],
  exports: [RouterModule],
    providers:[{ provide: COMPONENT_EXAMPLE, useValue: NONE_OF_ASYNC_COMPONENT_EXAMPLE_CONSTANT }]
  })
export class NoneOfAsyncModule { }



