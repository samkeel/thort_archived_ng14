import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import {
  AngularFirestore,
  AngularFirestoreDocument,
} from '@angular/fire/compat/firestore';

import { Task, TodoData } from '../models/todo-data.model';

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  constructor(private afAuth: AngularFireAuth, private db: AngularFirestore) {}

  // create new todo entry
  async createNewTodoList(todoData: TodoData) {
    const user = await this.afAuth.currentUser;
    return this.db.collection('todos').add({
      ...todoData,
      uid: user?.uid,
      tasks: [{ description: 'hello' }],
    });
  }

  // delete todo entry
  deleteTodoList(todoId: string) {
    return this.db.collection('todos').doc(todoId).delete();
  }

  // update todo items in list
  updateTodo(todoID: string, tasks: Task[]) {
    return this.db.collection('todos').doc(todoID).update({ tasks });
  }

  // remove todo item from the list
  removeTodo(todoID: string, task: Task) {
    return this.db.collection('todos').doc(todoID).update({
      // tasks: firebase.firestore.fieldvalue.arrayremove(),
      
      
    });
  }
}
