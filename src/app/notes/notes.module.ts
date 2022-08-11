import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotesRoutingModule } from './notes-routing.module';
import { SharedModule } from '../shared/shared/shared.module';
import { NotesComponent } from './components/notes/notes.component';

@NgModule({
  declarations: [
    NotesComponent
  ],
  imports: [CommonModule, NotesRoutingModule, SharedModule],
})
export class NotesModule {}
