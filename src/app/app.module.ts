import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { TodoListComponent } from './todo-list/todo-list.component';
import { FormsModule } from '@angular/forms';
import { todosFeatureKey, reducer as todosReducer } from './todos/todos.reducer';
import { userProfileFeatureKey, reducer as userProfileReducer } from './user-profile/user-profile.reducer';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgbPaginationModule, NgbAlertModule } from '@ng-bootstrap/ng-bootstrap';
import { TodosEffects } from './todos/todos.effects';


@NgModule({
  declarations: [
    AppComponent,
    TodoListComponent
  ],
  imports: [
    NgbPaginationModule,
    NgbAlertModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    StoreModule.forRoot({ [todosFeatureKey]: todosReducer, [userProfileFeatureKey]: userProfileReducer }, {}),
    EffectsModule.forRoot([TodosEffects]),
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
