import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NotesRoutingModule } from './notes-routing.module';
import { MainComponent } from './components/main/main.component';
import { TodoComponent } from './components/todo/todo.component';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { SharedModule } from '../shared/shared/shared.module';

@NgModule({
  declarations: [MainComponent, TodoComponent],
  imports: [CommonModule, NotesRoutingModule, DragDropModule, SharedModule],
})
export class NotesModule {}
