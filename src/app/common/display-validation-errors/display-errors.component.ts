import { Component, Input } from '@angular/core';
import { AbstractControlDirective, AbstractControl } from '@angular/forms';

@Component({
 selector: 'display-errors',
 template: `
   <ul *ngIf="shouldShowErrors()">
     <li style="color: red" *ngFor="let error of errorsList()">{{error}}</li>
   </ul>
 `,
})
export class DisplayErrorsComponent {

 private static readonly errorMessages = {
   'required': () => 'Este campo es requerido',
   'minlength': (params) => 'El mínimo de caractéres es ' + params.requiredLength,
   'maxlength': (params) => 'El máximo de caractéres es ' + params.requiredLength,
   'pattern': (params) => 'El patrón requerido es: ' + params.requiredPattern,
   'selected': (params) => params.message,
   'numeric': (params) => params.message,
 };

 @Input()
 private control: AbstractControlDirective | AbstractControl;

 shouldShowErrors(): boolean {
   return this.control &&
     this.control.errors &&
     (this.control.dirty || this.control.touched);
 }

 errorsList(): string[] {
   return Object.keys(this.control.errors)
     .map(field => this.getMessage(field, this.control.errors[field]));
 }

 private getMessage(type: string, params: any) {
   return DisplayErrorsComponent.errorMessages[type](params);
 }
}
