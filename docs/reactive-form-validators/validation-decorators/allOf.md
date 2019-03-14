---
title: allOf 
description: allOf validation {{validatorType}} will check whether the user has entered all of the values of given field or not.
author: rxcontributortwo
category: form-validations
type: tabs
linktitle: allOf
---

# When to use

Suppose you want to create an employee form which contain fields like department, projectDomains, qualifications, skills and hobbies. You want the user to enter all values of a particular field. Here the field is taken in the form of array and according to that the choice is applied on the property by providing matchValues. Here depending upon the requirement these scenarios may arise.

<ol class='showHideElement'>
    <li>Apply allOf validation on the `projectDomains` field in which you want the user to select all the project domain mentioned in the matchValues.</li>
    <li>Apply allOf validation based on matched condition in the form, like if the department  is ‘dotnet’ then the `qualifications` field should be validated (Based on function).</li>
    <li>Apply allOf validation based on matched condition in the form, like if the department  is ‘dotnet’ then the `skills` field should be validated (Based on string datatype).</li>
    <li>Shows the custom validation message on `hobbies` field.</li>
    <data-scope scope="['decorator','validator']">
        <li>Apply allOf validation dynamically based on server rules.</li>
    </data-scope>
</ol>
Let’s see how allOf {{validatorType}} fulfil the need.

# Basic allOf Validation
<data-scope scope="['decorator','template-driven-directives','template-driven-decorators']">
First we need to create an Employee Model and define a property of projectDomains in the model to achieve the functional need of point 1.
<div component="app-code" key="allOf-add-model"></div> 
</data-scope>
Through Angular FormBuilder service we create FormGroup in the component.
Here we have covered Add form operation.

<div component="app-code" key="allOf-add-component"></div> 
Next, we need to write html code.
<div component="app-code" key="allOf-add-html"></div> 
<div component="app-example-runner" ref-component="app-allOf-add"></div>

***

# ArrayConfig
<data-scope scope="['decorator']">
Below options are not mandatory to use in the `@allOf()` decorator. If needed then use the below options.
</data-scope>
<data-scope scope="['validator']">
Below options are not mandatory to use in the `RxwebValidators.allOf()` validator. If needed then use the below options.
</data-scope>
<data-scope scope="['template-driven-directives','template-driven-decorators']">
Below options are not mandatory to use in the `allOf` validation. If needed then use the below options.
</data-scope>

<table class="table table-bordered table-striped showHideElement">
<tr><th>Option</th><th>Description</th></tr>
<tr><td><a (click)='scrollTo("#matchValues")' title="#matchValues">matchValues</a></td><td>matchValues is the array based on which the value is matched for validation. According to it, all the values in the array should be matched</td></tr>
<tr><td><a (click)='scrollTo("#conditionalExpression")' title="conditionalExpression">conditionalExpression</a></td><td>AllOf validation should be applied if the condition is matched in the `conditionalExpression` function. Validation framework will pass two parameters at the time of `conditionalExpression` check. Those two parameters are current `FormGroup` value and root `FormGroup` value. You can apply the condition on respective object value.If there is need of dynamic validation means it is not fixed in client code, it will change based on some criterias. In this scenario you can bind the expression based on the expression value is coming from the web server in `string` format. The `conditionalExpression` will work same as client function. For boolean variables, if you want to apply conditionalExpression, you must use `===` instead of `==`.</td></tr>
<tr><td><a (click)='scrollTo("#message")' title="message">message</a></td><td>To override the global configuration message and set the custom error message on respective FormControl</td></tr>
</table>

## matchValues 
Type :  `any[]` 

matchValues is the array based on which the value is matched for validation. According to it, all the values in the array should be matched.

<div component="app-code" key="allOf-matchValuesExample-model"></div> 
<div component="app-example-runner" ref-component="app-allOf-matchValues" title="allOf {{validatorType}} with matchValues" key="matchValues"></div>

## conditionalExpression 
Type :  `Function`  |  `string`  

AllOf validation should be applied if the condition is matched in the `conditionalExpression` function. Validation framework will pass two parameters at the time of `conditionalExpression` check. Those two parameters are current `FormGroup` value and root `FormGroup` value. You can apply the condition on respective object value.
If there is need of dynamic validation means it is not fixed in client code, it will change based on some criterias. In this scenario you can bind the expression based on the expression value is coming from the web server in `string` format. The `conditionalExpression` will work same as client function. For boolean variables, if you want to apply conditionalExpression, you must use `===` instead of `==`.

<data-scope scope="['validator','decorator']">

> Binding `conditionalExpression` with `Function` object.
<div component="app-code" key="allOf-conditionalExpressionExampleFunction-model"></div> 
</data-scope>

> Binding `conditionalExpression` with `string` object.
<div component="app-code" key="allOf-conditionalExpressionExampleString-model"></div> 

<div component="app-example-runner" ref-component="app-allOf-conditionalExpression" title="allOf {{validatorType}} with conditionalExpression" key="conditionalExpression"></div>

## message
Type :  `string`
To override the global configuration message and set the custom error message on respective FormControl

<div component="app-code" key="allOf-messageExample-model"></div> 
<div component="app-example-runner" ref-component="app-allOf-message" title="allOf {{validatorType}} with message" key="message"></div>

# Complete allOf Example

This Complete allOf example which includes all the ArrayConfig properties will fulfil the requirement of scenarios 1, 2, 3 and 4.

<div component="app-tabs" key="complete"></div>

[!TabGroup]
# [Example](#tab\completeexample)
<div component="app-example-runner" ref-component="app-allOf-complete"></div>
# [/Example]
<data-scope scope="['decorator','template-driven-directives','template-driven-decorators']">
# [Model](#tab\completemodel)
<div component="app-code" key="allOf-complete-model"></div> 
# [/Model]
</data-scope>
# [Component](#tab\completecomponent)
<div component="app-code" key="allOf-complete-component"></div> 
# [/Component]
# [Html](#tab\completehtml)
<div component="app-code" key="allOf-complete-html"></div> 
# [/Html]
***

<data-scope scope="['decorator','validator']">

# Dynamic allOf Example

This Dynamic AllOf example is executed on the basis of json passed in the formBuilderConfiguration which comes under `RxFormBuilder` of reactive-form-validators. `conditionalExpression` with function would not be applied in dynamic allOf example. This example will fulfil the requirement of our last point.

<div component="app-tabs" key="dynamic"></div>

[!TabGroup]
# [Example](#tab\dynamicexample)
<div component="app-example-runner" ref-component="app-allOf-dynamic"></div>
# [/Example]
<data-scope scope="['decorator']">
# [Model](#tab\dynamicmodel)
<div component="app-code" key="allOf-dynamic-model"></div>
# [/Model]
</data-scope>
# [Component](#tab\dynamiccomponent)
<div component="app-code" key="allOf-dynamic-component"></div>
# [/Component]
# [Json](#tab\dynamicjson)
<div component="app-code" key="allOf-dynamic-json"></div>
# [/Json]
# [Html](#tab\dynamichtml)
<div component="app-code" key="allOf-dynamic-html"></div> 
# [/Html]
***
</data-scope>
