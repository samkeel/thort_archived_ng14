import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NotesRoutingModule } from './notes-routing.module';
import { MainComponent } from './components/main/main.component';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { SharedModule } from '../shared/shared/shared.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { BoardComponent } from './components/board/board.component';
import { BoardListComponent } from './components/board-list/board-list.component';
import { FormsModule } from '@angular/forms';
import { TaskDialogComponent } from './components/dialogs/task-dialog/task-dialog.component';
import { BoardDialogComponent } from './components/dialogs/board-dialog/board-dialog.component';

@NgModule({
  declarations: [
    MainComponent,
    BoardComponent,
    BoardListComponent,
    BoardDialogComponent,
    TaskDialogComponent,
  ],
  imports: [
    CommonModule,
    NotesRoutingModule,
    DragDropModule,
    SharedModule,
    FlexLayoutModule,
    FormsModule
  ]
})
export class NotesModule {}
