import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BoardListComponent } from './components/board-list/board-list.component';
import { MainComponent } from './components/main/main.component';

const routes: Routes = [
  {path: '', component: MainComponent},
  {path: 'kanban', component: BoardListComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NotesRoutingModule { }
