import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { HeaderComponent } from '../components/header/header.component';
import { HomeComponent } from '../components/home/home.component';
import { ShellComponent } from '../components/shell/shell.component';
import { SideNavComponent } from '../components/side-nav/side-nav.component';
import { SignInComponent } from '../components/sign-in/sign-in.component';
import { SignUpComponent } from '../components/sign-up/sign-up.component';

// material
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatCardModule } from '@angular/material/card';
import { MatTreeModule } from '@angular/material/tree';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatStepperModule } from '@angular/material/stepper';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatSelectModule } from '@angular/material/select';
import { MatRadioModule } from '@angular/material/radio';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatDividerModule } from '@angular/material/divider';
import {MatDialogModule} from '@angular/material/dialog';
import { RouterModule } from '@angular/router';
import { PageNotFoundComponent } from '../components/page-not-found/page-not-found.component';
import {MatButtonToggleModule} from '@angular/material/button-toggle';


const components = [
  HeaderComponent,
  HomeComponent,
  ShellComponent,
  SideNavComponent,
  SignInComponent,
  SignUpComponent,
  PageNotFoundComponent
];

const matModules = [
  LayoutModule,
  MatToolbarModule,
  MatButtonModule,
  MatSidenavModule,
  MatIconModule,
  MatListModule,
  MatExpansionModule,
  MatCardModule,
  MatTreeModule,
  MatProgressBarModule,
  MatGridListModule,
  MatSnackBarModule,
  MatInputModule,
  MatFormFieldModule,
  ReactiveFormsModule,
  FormsModule,
  MatCheckboxModule,
  MatStepperModule,
  MatDatepickerModule,
  MatNativeDateModule,
  MatSelectModule,
  MatRadioModule,
  MatSlideToggleModule,
  MatDividerModule,
  MatDialogModule,
  MatButtonToggleModule
];

@NgModule({
  declarations: [...components],
  imports: [CommonModule, RouterModule, ...matModules],
  exports: [...components, ...matModules],
})
export class SharedModule {}
