import { Component, OnInit } from '@angular/core';
import { Loaderservices} from './lader.services';
@Component({
    selector: 'loader-component',
    templateUrl: './loader.component.html',
    styles : [ './loader.component.css']
})

export class LoaderComponent implements OnInit {
    isLoading = this.loaderservices.isLoading;
    constructor(private loaderservices:Loaderservices) { }

    ngOnInit() { 
    
    }
}