import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { TaskPage } from './task.page';
import { AddTaskComponentModule } from '../../../projects/todo2/src/lib/adapters/primary/ui/add-task.component-module';
import { FirebaseTaskServiceModule } from '../../../projects/todo2/src/lib/adapters/secondary/infrastructure/firebase-task.service-module';

@NgModule({ imports: [CommonModule, 
      RouterModule.forChild([
        {
          path: '',
          component: TaskPage,
        }
      ]),
  AddTaskComponentModule,
  FirebaseTaskServiceModule
],
  	declarations: [TaskPage],
  	providers: [],
  	exports: [] })
export class TaskPageModule {
}
