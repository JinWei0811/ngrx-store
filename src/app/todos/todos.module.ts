import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EffectsModule } from '@ngrx/effects';
import { TodosEffects } from './todos.effects';



@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    EffectsModule.forFeature([TodosEffects])
  ]
})
export class TodosModule { }
