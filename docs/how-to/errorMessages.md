---
title: Best way to show error messages 
author: rxcontributorone
category: how-to
type:tabs
linktitle: errorMessages 
---

As we mostly work on Reactive Forms and showing error messages is little bit clumsy task, when the multiple validators are involved in single FormControl. Usually we put *ngIf in the html and binds the respective validator's error messages. To overcome this problem let's discuss the most appropriate approach for showing the error messages.

Before discussing about the code, lets see the scenario first:
We have userName and password field. UserName field is required field and password field have multiple validations like minimum length should be 5, maximum length should be 10 and special character true and digit true. Based upon this there are two scenarios, display single error message for one validation and multiple messages for multiple validation. 
To Configure message globally in your application, Please refer <a href="/api/reactive-form-config">`ReactiveFormConfig`</a>

# Display Single Message

You have to use RxFormBuilder service to create FormGroup in the component.

<data-scope scope="['decorator']">
First we need to create a user class and define properties in the model.
<div component="app-code" key="error-single-model"></div> 
</data-scope>
<div component="app-code" key="error-single-component"></div> 
Next, we need to write html code. For showing error message you have to use 'errorMessage' property.
<div component="app-code" key="error-single-html"></div> 
<div component="app-example-runner" ref-component="app-errormessage-single"></div>

# Display Multiple Messages

You have to use RxFormBuilder service to create FormGroup in the component.

<data-scope scope="['decorator']">
First we need to create a user class and define properties in the model.
<div component="app-code" key="error-complete-model"></div> 
</data-scope>
<div component="app-code" key="error-complete-component"></div> 
Next, we need to write html code. For showing error message you have to use 'errorMessage' property.
<div component="app-code" key="error-complete-html"></div> 
<div component="app-example-runner" ref-component="app-errormessage-complete"></div>