import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { KanbanRoutingModule } from './kanban-routing.module';
import { BoardComponent } from './components/board/board.component';
import { BoardListComponent } from './components/board-list/board-list.component';
import { BoardDialogComponent } from './components/dialogs/board-dialog/board-dialog.component';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { SharedModule } from '../shared/shared/shared.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule } from '@angular/forms';
import { TaskDialogComponent } from './components/dialogs/task-dialog/task-dialog.component';

@NgModule({
  declarations: [
    BoardComponent,
    BoardListComponent,
    BoardDialogComponent,
    TaskDialogComponent
  ],
  imports: [
    CommonModule,
    KanbanRoutingModule,
    DragDropModule,
    SharedModule,
    FlexLayoutModule,
    FormsModule,
  ],
})
export class KanbanModule {}
