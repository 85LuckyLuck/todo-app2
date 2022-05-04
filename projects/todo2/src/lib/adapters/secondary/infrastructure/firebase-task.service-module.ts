import { NgModule } from '@angular/core';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { FirebaseTaskService } from './firebase-task.service';

@NgModule({ imports: [AngularFirestoreModule],
  	declarations: [],
  	providers: [FirebaseTaskService],
  	exports: [] })
export class FirebaseTaskServiceModule {
}
