import { NgModule} from '@angular/core';
import { RouterModule } from '@angular/router';
import { ADVANCE_FORMS_COMPONENT_EXAMPLE_CONSTANT } from "src/app/components/learn/advance-forms/advance-forms.constants";
import { COMPONENT_EXAMPLE } from "src/app/domain/application.const";
import { ADVANCE_FORMS_ROUTING } from "src/app/components/learn/advance-forms/advance-forms.routing";
import { PageModule } from "src/app/components/page/page.module";



@NgModule({
  imports: [ADVANCE_FORMS_ROUTING ,PageModule],
  exports: [RouterModule],
    providers:[{ provide: COMPONENT_EXAMPLE, useValue: ADVANCE_FORMS_COMPONENT_EXAMPLE_CONSTANT }]
  })
export class Advance_formsModule { }



