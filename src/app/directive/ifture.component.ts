import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({ selector: '[iftrue]'})
export class IftrueDirective {

    constructor(
        private templateRef: TemplateRef<any>,
        private viewContainer: ViewContainerRef) { }
 
@Input() set iftrue(condition){
    console.log(condition);
    if(condition){
        this.viewContainer.createEmbeddedView(this.templateRef);
    }else{
        this.viewContainer.clear();
    }
    
    
}

}