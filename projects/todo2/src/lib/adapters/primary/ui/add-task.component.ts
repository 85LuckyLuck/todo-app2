import { FormGroup, FormControl } from '@angular/forms';
import { Component, ViewEncapsulation, ChangeDetectionStrategy, Inject } from '@angular/core';
import { map, Observable, tap } from 'rxjs';
import { TaskDTO } from '../../../application/ports/secondary/task.dto';
import { GETS_ALL_TASK_DTO, GetsAllTaskDtoPort } from '../../../application/ports/secondary/gets-all-task.dto-port';
import { ADDS_TASK_DTO, AddsTaskDtoPort } from '../../../application/ports/secondary/adds-task.dto-port';
import { REMOVES_TASK_DTO, RemovesTaskDtoPort } from '../../../application/ports/secondary/removes-task.dto-port';
import { SETS_TASK_DTO, SetsTaskDtoPort } from '../../../application/ports/secondary/sets-task.dto-port';

@Component({ 
    selector: 'lib-add-task',
    templateUrl: './add-task.component.html', 
    encapsulation: ViewEncapsulation.None, 
    changeDetection: ChangeDetectionStrategy.OnPush })
export class AddTaskComponent {
  readonly textForm: FormGroup = new FormGroup({ text: new FormControl()});
  task$: Observable<TaskDTO[]> = this._getsAllTaskDto.getAll()
  .pipe(
    map((task: TaskDTO[]) =>
  task.sort((a, b) => a.created - b.created)),
  
  tap((task: any) => console.log(task))
  );
  

  constructor(
    @Inject(GETS_ALL_TASK_DTO) private _getsAllTaskDto: GetsAllTaskDtoPort,
     @Inject(ADDS_TASK_DTO) private _addsTaskDto: AddsTaskDtoPort, 
     @Inject(REMOVES_TASK_DTO) private _removesTaskDto: RemovesTaskDtoPort, @Inject(SETS_TASK_DTO) private _setsTaskDto: SetsTaskDtoPort) {
  }

  onTaskClicked(form:FormGroup): void {
    this._addsTaskDto.add({
      text: form.get('text')?.value,
      done: false,
    });
  this.textForm.reset();
}

  onRemoveTaskClicked(id: TaskDTO): void {
    this._removesTaskDto.remove(id.id);
  }

  onTasksCheckeded(task: TaskDTO): void {
    if (task.done) {
      this._setsTaskDto.set({ ...task, done: false}); console.log(task)
    }
    else {
      this._setsTaskDto.set({ ...task, done: true});
    }
  }
}
