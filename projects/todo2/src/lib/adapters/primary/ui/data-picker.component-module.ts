import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataPickerComponent } from './data-picker.component';

@NgModule({ imports: [CommonModule],
  	declarations: [DataPickerComponent],
  	providers: [],
  	exports: [DataPickerComponent] })
export class DataPickerComponentModule {
}
