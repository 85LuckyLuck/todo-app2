import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddTaskComponent } from './add-task.component';

@NgModule({ imports: [CommonModule],
  	declarations: [AddTaskComponent],
  	providers: [],
  	exports: [AddTaskComponent] })
export class AddTaskComponentModule {
}
