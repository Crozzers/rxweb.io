---
title: choice 
description: choice validation {{validatorType}} will check that whether the value entered by user is matching the range defined in the properties.
author: rxcontributortwo
category: form-validations
type: tabs
linktitle: choice
---

# When to use
Suppose you want to create an employee form which contains fields like department, projectDomains, qualifications, skills and hobbies. You want user to select a specific range of value for a particular choice. Here the field is taken in the form of array and according to that the choice is applied on the property by applying minlength and maxLength. Here depending upon the requirement these scenarios may arise.

<ol class='showHideElement'>
    <li>The projectDomains field in which you want the user to enter minimum three domains.</li>
    <li>The qualifications field in which you want the user to enter maximum four qualifications.</li>
    <li>Apply choice validation based on matched condition in the form, like if the department  is ‘dotnet’ then the user must select minimum 3 languages (Based on function).</li>
    <li>Apply choice validation based on matched condition in the form, like if the department  is ‘dotnet’ then the user must select minimum 3 skills (Based on string datatype).</li>
    <li>Adding Custom Message on Hobbies Field.</li>
    <data-scope scope="['decorator','validator']">
        <li>Apply choice validation dynamically based on server rules.</li>
    </data-scope>
</ol>
Let’s see how choice {{validatorType}} fulfil the need.

# Basic choice Validation
<data-scope scope="['decorator','template-driven-directives','template-driven-decorators']">
First we need to create a Employee Model and define a property of hobbies in the model to achieve the functional need of point 1.
<div component="app-code" key="choice-add-model"></div> 
</data-scope>
Through Angular FormBuilder service we create FormGroup in the component.
<data-scope scope="['decorator']">
Here we have covered Add and Edit form operations. 
</data-scope>

<data-scope scope="['validator','template-driven-directives','template-driven-decorators']">
Here we have covered Add form operations. 
</data-scope>

<data-scope scope="['decorator']">
<div component="app-code" key="choice-add-component"></div> 
Next, we need to write html code.
<div component="app-code" key="choice-add-html"></div> 
<div component="app-example-runner" ref-component="app-choice-add"></div>
</data-scope>

<data-scope scope="['validator','template-driven-directives','template-driven-decorators']">
<div component="app-code" key="choice-add-component"></div> 
Next, we need to write html code.
<div component="app-code" key="choice-add-html"></div> 
<div component="app-example-runner" ref-component="app-choice-add"></div>
</data-scope>

# ChoiceConfig
<data-scope scope="['decorator']">
Below options are not mandatory to use in the `@choice()` decorator. If needed then use the below options.
</data-scope>
<data-scope scope="['validator']">
Below options are not mandatory to use in the `RxwebValidators.choice()` validator. If needed then use the below options.
</data-scope>
<data-scope scope="['template-driven-directives','template-driven-decorators']">
Below options are not mandatory to use in the `choice` validation. If needed then use the below options.
</data-scope>

<table class="table table-bordered table-striped showHideElement">
<tr><th>Option</th><th>Description</th></tr>
<tr><td><a (click)='scrollTo("#minLength")' title="#minLength">minLength</a></td><td>MinLength is to define a minimum number of values to be selected for a particular field which is in form of array</td></tr>
<tr><td><a (click)='scrollTo("#maxLength")' title="#maxLength">maxLength</a></td><td>MaxLength  is to define a maximum number of values to be selected for a particular field which is in form of array</td></tr>
<tr><td><a  (click)='scrollTo("#conditionalExpression")' title="conditionalExpression">conditionalExpression</a></td><td>Choice validation should be applied if the condition is matched in the `conditionalExpression` function. Validation framework will pass two parameters at the time of `conditionalExpression` check. Those two parameters are current `FormGroup` value and root `FormGroup` value. You can apply the condition on respective object value.If there is need of dynamic validation means it is not fixed in client code, it will change based on some criterias. In this scenario you can bind the expression based on the expression value is coming from the web server in `string` format. The `conditionalExpression` will work same as client function. For boolean variables, if you want to apply conditionalExpression, you must use `===` instead of `==`.</td></tr>
<tr><td><a  (click)='scrollTo("#message")' title="message">message</a></td><td>To override the global configuration message and set the custom error message on respective FormControl</td></tr>
</table>

## minLength 
Type :  `number`

MinLength is to define a minimum number of values to be selected for a particular field which is in form of array.

<div component="app-code" key="choice-minLengthExample-model"></div> 

<div component="app-example-runner" ref-component="app-choice-minLength" title="choice {{validatorType}} with minLength" key="minLength"></div>

## maxLength 
Type :  `number`

MaxLength  is to define a maximum number of values to be selected for a particular field which is in form of array.

<div component="app-code" key="choice-maxLengthExample-model"></div> 

<div component="app-example-runner" ref-component="app-choice-maxLength" title="choice {{validatorType}} with maxLength" key="maxLength"></div>

## conditionalExpression 
Type :  `Function`  |  `string` 

Choice validation should be applied if the condition is matched in the `conditionalExpression` function. Validation framework will pass two parameters at the time of `conditionalExpression` check. Those two parameters are current `FormGroup` value and root `FormGroup` value. You can apply the condition on respective object value.
If there is need of dynamic validation means it is not fixed in client code, it will change based on some criterias. In this scenario you can bind the expression based on the expression value is coming from the web server in `string` format. The `conditionalExpression` will work same as client function. For boolean variables, if you want to apply conditionalExpression, you must use `===` instead of `==`.

<data-scope scope="['validator','decorator']">
> Binding `conditionalExpression` with `Function` object. 
<div component="app-code" key="choice-conditionalExpressionExampleFunction-model"></div> 
</data-scope>

> Binding `conditionalExpression` with `string` object. 
<div component="app-code" key="choice-conditionalExpressionExampleString-model"></div> 

<div component="app-example-runner" ref-component="app-choice-conditionalExpression" title="choice {{validatorType}} with conditionalExpression" key="conditionalExpression"></div>

## message
Type :  `string`

To override the global configuration message and set the custom error message on respective FormControl

<div component="app-code" key="choice-messageExample-model"></div> 
<div component="app-example-runner" ref-component="app-choice-message" title="choice {{validatorType}} with message" key="message"></div>

# Complete choice Example

This Complete choice example which includes all the ChoiceConfig properties will fulfil the requirement of scenarios 1, 2, 3, 4 and 5.

<div component="app-tabs" key="complete"></div>
[!TabGroup]
# [Example](#tab\completeexample)
<div component="app-example-runner" ref-component="app-choice-complete"></div>
# [/Example]
<data-scope scope="['decorator','template-driven-directives','template-driven-decorators']">
# [Model](#tab\completemodel)
<div component="app-code" key="choice-complete-model"></div> 
# [/Model]
</data-scope>
# [Component](#tab\completecomponent)
<div component="app-code" key="choice-complete-component"></div> 
# [/Component]
# [Html](#tab\completehtml)
<div component="app-code" key="choice-complete-html"></div> 
# [/Html]
***

<data-scope scope="['decorator','validator']">
# Dynamic choice Example

This Dynamic Choice example is executed on the basis of json passed in the formBuilderConfiguration which comes under `RxFormBuilder` of reactive-form-validators. `conditionalExpression` with function would not be applied in dynamic choice example. This example will fulfil the requirement of our last point.

<div component="app-tabs" key="dynamic"></div>

[!TabGroup]
# [Example](#tab\dynamicexample)
<div component="app-example-runner" ref-component="app-choice-dynamic"></div>
# [/Example]
<data-scope scope="['decorator']">
# [Model](#tab\dynamicmodel)
<div component="app-code" key="choice-dynamic-model"></div>
# [/Model]
</data-scope>
# [Component](#tab\dynamiccomponent)
<div component="app-code" key="choice-dynamic-component"></div>
# [/Component]
# [Json](#tab\dynamicjson)
<div component="app-code" key="choice-dynamic-json"></div>
# [/Json]
# [Html](#tab\dynamichtml)
<div component="app-code" key="choice-dynamic-html"></div> 
# [/Html]
***
</data-scope>
