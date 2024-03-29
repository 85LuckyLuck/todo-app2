import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { GetsAllTaskDtoPort } from '../../../application/ports/secondary/gets-all-task.dto-port';
import { TaskDTO } from '../../../application/ports/secondary/task.dto';
import { filterByCriterion } from '@lowgular/shared';
import { AddsTaskDtoPort } from '../../../application/ports/secondary/adds-task.dto-port';
import { RemovesTaskDtoPort } from '../../../application/ports/secondary/removes-task.dto-port';
import { SetsTaskDtoPort } from '../../../application/ports/secondary/sets-task.dto-port';

@Injectable()
export class FirebaseTaskService implements GetsAllTaskDtoPort, AddsTaskDtoPort, RemovesTaskDtoPort, SetsTaskDtoPort {
  constructor(private _client: AngularFirestore) {
  }

  getAll(criterion: Partial<TaskDTO>): Observable<TaskDTO[]> {
    return this._client.collection<TaskDTO>('tasks').valueChanges(({idField: 'id'})).pipe(map((data: TaskDTO[]) => filterByCriterion(data, criterion)));
  }

  add(task: Partial<TaskDTO>): void {
    this._client.collection('tasks').add(task);
  }

  remove(id: string): void {
    this._client.doc('tasks/'+id).delete();
  }

  set(task: Partial<TaskDTO>): void {
    this._client.doc('tasks/'+task.id).update(task);
  }
}



