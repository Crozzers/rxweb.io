import { NgModule} from '@angular/core';
import { RouterModule } from '@angular/router';
import { ONE_OF_ASYNC_COMPONENT_EXAMPLE_CONSTANT } from "src/app/components/async-validators/oneOfAsync/one-of-async.constants";
import { COMPONENT_EXAMPLE } from "src/app/domain/application.const";
import { ONE_OF_ASYNC_ROUTING } from "src/app/components/async-validators/oneOfAsync/one-of-async.routing";
import { PageModule } from "src/app/components/page/page.module";
import { OneOfAsyncValidatorsExtendedModule } from 'src/assets/examples/reactive-form-validators/validators/oneOfAsync/one-of-async-validators-extended.module';
import { OneOfAsyncDecoratorsExtendedModule } from 'src/assets/examples/reactive-form-validators/decorators/oneOfAsync/one-of-async-decorators-extended.module';



@NgModule({
  imports: [ONE_OF_ASYNC_ROUTING , OneOfAsyncValidatorsExtendedModule, OneOfAsyncDecoratorsExtendedModule, PageModule],
  exports: [RouterModule],
    providers:[{ provide: COMPONENT_EXAMPLE, useValue: ONE_OF_ASYNC_COMPONENT_EXAMPLE_CONSTANT }]
  })
export class OneOfAsyncModule { }



