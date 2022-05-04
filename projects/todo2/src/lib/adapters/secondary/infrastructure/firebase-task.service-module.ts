import { NgModule } from '@angular/core';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { FirebaseTaskService } from './firebase-task.service';
import { GETS_ALL_TASK_DTO } from '../../../application/ports/secondary/gets-all-task.dto-port';

@NgModule({ imports: [AngularFirestoreModule],
  	declarations: [],
  	providers: [FirebaseTaskService, { provide: GETS_ALL_TASK_DTO, useExisting: FirebaseTaskService }],
  	exports: [] })
export class FirebaseTaskServiceModule {
}
