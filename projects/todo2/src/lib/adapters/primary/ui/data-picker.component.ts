import { Component, ViewEncapsulation, ChangeDetectionStrategy, OnInit } from '@angular/core';

@Component({ 
    selector: 'lib-data-picker', 
    templateUrl: './data-picker.component.html', 
    encapsulation: ViewEncapsulation.None, 
    changeDetection: ChangeDetectionStrategy.OnPush })
export class DataPickerComponent implements OnInit {

    Date1 : Date = new Date();

    constructor() { }

    ngOnInit(): void {
        
    }
}
