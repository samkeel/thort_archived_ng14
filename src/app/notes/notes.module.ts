import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NotesRoutingModule } from './notes-routing.module';
import { MainComponent } from './components/main/main.component';
import { TodoComponent } from './components/todo/todo.component';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { SharedModule } from '../shared/shared/shared.module';
import { KanbanComponent } from './components/kanban/kanban.component';
import { TaskComponent } from './components/task/task.component';
import { TaskDialogComponent } from './components/task-dialog/task-dialog.component';
import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
  declarations: [MainComponent, TodoComponent, KanbanComponent, TaskComponent, TaskDialogComponent],
  imports: [CommonModule, NotesRoutingModule, DragDropModule, SharedModule, FlexLayoutModule],
})
export class NotesModule {}
