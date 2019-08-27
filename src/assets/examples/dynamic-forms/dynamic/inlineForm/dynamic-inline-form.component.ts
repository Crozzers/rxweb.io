import { Component, OnInit } from "@angular/core";
import { DynamicFormBuildConfig, DynamicFormConfiguration, RxDynamicFormBuilder } from "@rxweb/reactive-dynamic-forms";

@Component({
    selector: 'app-dynamic-InlineForm',
    templateUrl: './dynamic-inline-form.component.html'
})

export class DynamicInlineFormComponent implements OnInit {
    serverData = [{
        name: "name",
        type: "text",
        ui: {
            viewMode: {
                inline: {
                    label: ["sr-only"],
                    input: ["mb-2", "mr-sm-2"]
                }
            },
            class: ["mb-2", "mr-sm-2"],
            label: "Name",
            placeholder: "Jane Doe",
        }
    },
    {
        name: "username",
        type: "text",
        ui: {
            viewMode: {
                inline: {
                    label: ["sr-only"],
                    div: ["mb-2", "mr-sm-2"]
                }
            },
            label: "Username",
            prependText: { left: "@" },
            placeholder: "Username"
        }
    },
    {
        name: "Rememberme",
        type: "checkbox",
        source: [{ value: 1, text: "Remember me" }],
        ui: {
          class: ["mb-2", "mr-sm-2"],
            viewMode: {
                inline: {
                    div: ["mb-2", "mr-sm-2"]
                }
            },
        }
    }
    ]

    uiBindings: string[] = ["name", "username", "Rememberme"];
    dynamicFormBuildConfig: DynamicFormBuildConfig;

    constructor(private formBuilder: RxDynamicFormBuilder) { }
    ngOnInit() {
        this.dynamicFormBuildConfig = this.formBuilder.formGroup(this.serverData, {});
    }
}