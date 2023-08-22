import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';


import {MatTableModule} from '@angular/material/table'; 
import {MatSortModule} from '@angular/material/sort'; 
import {MatPaginatorModule} from '@angular/material/paginator'; 
import {MatFormFieldModule} from '@angular/material/form-field'; 
import {MatInputModule} from '@angular/material/input'; 
import {MatIconModule} from '@angular/material/icon';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { SpinerComponent } from './spiner/spiner.component';
import {MatProgressBarModule} from '@angular/material/progress-bar'; 
import { FormsModule } from '@angular/forms'; 
import {MatGridListModule} from '@angular/material/grid-list';
import { ReactiveFormsModule } from '@angular/forms';




@NgModule({
  declarations: [
    SpinerComponent
  ],
  imports: [
    CommonModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatTooltipModule,
    MatButtonModule,
    MatCardModule,
    MatSnackBarModule,
    MatProgressBarModule,
    FormsModule,
    MatGridListModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  exports: [
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatTooltipModule,
    MatButtonModule,
    MatCardModule,
    MatSnackBarModule,
    SpinerComponent,
    MatProgressBarModule,
    FormsModule,
    MatGridListModule,
    ReactiveFormsModule,
    HttpClientModule
  ]

})
export class SharedModule { }
