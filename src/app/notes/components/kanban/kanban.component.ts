import {
  CdkDragDrop,
  moveItemInArray,
  transferArrayItem,
} from '@angular/cdk/drag-drop';
import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { MatDialog } from '@angular/material/dialog';
import { Observable } from 'rxjs';
import { Task, TaskDialogResult } from '../../models/task-data.model';
import { TaskDialogComponent } from '../task-dialog/task-dialog.component';

@Component({
  selector: 'app-kanban',
  templateUrl: './kanban.component.html',
  styleUrls: ['./kanban.component.scss'],
})
export class KanbanComponent implements OnInit {
  // todo: Task[] = [
  //   {
  //     title: 'Skateboarding',
  //     description: 'Buy an E-Skateboard',
  //   },
  //   {
  //     title: 'Safety',
  //     description: 'Buy new safety gear',
  //   },
  // ];
  // inProgress: Task[] = [];
  // done: Task[] = [];

  todo = this.fStore
    .collection('k_todo')
    .valueChanges({ idField: 'id' }) as Observable<Task[]>;
  inProgress = this.fStore
    .collection('k_inProgress')
    .valueChanges({ idField: 'id' }) as Observable<Task[]>;
  done = this.fStore
    .collection('k_done')
    .valueChanges({ idField: 'id' }) as Observable<Task[]>;

  constructor(private dialog: MatDialog, private fStore: AngularFirestore) {}

  ngOnInit(): void {}

  newTask(): void {
    const dialogRef = this.dialog.open(TaskDialogComponent, {
      width: '270px',
      data: {
        task: {},
      },
    });
    dialogRef
      .afterClosed()
      .subscribe((result: TaskDialogResult | undefined) => {
        if (!result) {
          return;
        }
        // this.todo.push(result.task);
        this.fStore.collection('k_todo').add(result.task);
      });
  }

  editTask(list: 'done' | 'todo' | 'inProgress', task: Task): void {
    const dialogRef = this.dialog.open(TaskDialogComponent, {
      width: '270px',
      data: {
        task,
        enableDelete: true,
      },
    });
    dialogRef
      .afterClosed()
      .subscribe((result: TaskDialogResult | undefined) => {
        if (!result) {
          return;
        }
        if (result.delete) {
          this.fStore.collection(list).doc(task.id).delete();
        } else {
          this.fStore.collection(list).doc(task.id).update(task);
        }
      });
  }

  // drop(event: CdkDragDrop<Task[]>): void {
  //   if (event.previousContainer === event.container) {
  //     moveItemInArray(
  //       event.container.data,
  //       event.previousIndex,
  //       event.currentIndex
  //     );
  //   } else {
  //     transferArrayItem(
  //       event.previousContainer.data,
  //       event.container.data,
  //       event.previousIndex,
  //       event.currentIndex
  //     );
  //   }
  // }

  drop(event: CdkDragDrop<Task[]|null>): void {
    if (event.previousContainer === event.container) {
      return;
    }
    if (!event.previousContainer.data || !event.container.data) {
      return;
    }
    const item = event.previousContainer.data[event.previousIndex];
    this.fStore.firestore.runTransaction(() => {
      const promise = Promise.all([
        this.fStore.collection(event.previousContainer.id).doc(item.id).delete(),
        this.fStore.collection(event.container.id).add(item),
      ]);
      return promise;
    });
    transferArrayItem(
      event.previousContainer.data,
      event.container.data,
      event.previousIndex,
      event.currentIndex
    );
  }

}
