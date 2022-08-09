import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { arrayRemove, Firestore, writeBatch } from '@angular/fire/firestore';
import * as firebase from 'firebase/compat';
import { map, switchMap } from 'rxjs';
import { Board, Task } from '../models/board-data.model';

@Injectable({
  providedIn: 'root',
})
export class BoardService {
  constructor(private afAuth: AngularFireAuth, private db: AngularFirestore) {}

  // create a new board for the current user
  async createBoard(data: Board) {
    const user = await this.afAuth.currentUser;
    return this.db.collection('boards').add({
      ...data,
      uid: user?.uid,
      tasks: [{ description: 'hello', label: 'yellow' }],
    });
  }

  // getall boards owned by current user
  getUserBoards() {
    return this.afAuth.authState.pipe(
      switchMap((user) => {
        if (user) {
          return this.db
            .collection<Board>('boards', (ref) =>
              ref.where('uid', '==', user.uid).orderBy('priority')
            )
            .valueChanges({ idField: 'id' });
        } else {
          return [];
        }
      })
    );
  }

  // update
  updateTasks(boardId: string, tasks: Task[]) {
    return this.db.collection('boards').doc(boardId).update({ tasks });
  }

  // delete board
  deleteBoard(boardId: string) {
    return this.db.collection('boards').doc(boardId).delete();
  }

  // remove specific tasks from the board
  removeTask(boardId: string, task: Task) {
    return this.db
      .collection('boards')
      .doc(boardId)
      .update({
        tasks: arrayRemove(task),
      });
  }

  // batch write to change the priority of each board for sorting
  sortBoards(boards: Board[]) {

  }
}
