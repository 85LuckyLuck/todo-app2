import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { GetsAllTaskDtoPort } from '../../../application/ports/secondary/gets-all-task.dto-port';
import { TaskDTO } from '../../../application/ports/secondary/task.dto';
import { filterByCriterion } from '@lowgular/shared';

@Injectable()
export class FirebaseTaskService implements GetsAllTaskDtoPort {
  constructor(private _client: AngularFirestore) {
  }

  getAll(criterion: Partial<TaskDTO>): Observable<TaskDTO[]> {
    return this._client.collection<TaskDTO>('tasks').valueChanges(({idField: 'id'})).pipe(map((data: TaskDTO[]) => filterByCriterion(data, criterion)));
  }
}


