import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule, LeaveRouteGuard } from './app-routing.module';
import { AppComponent } from './app.component';
import { CalculatorContainerComponent, CalculatorEffectiveComponent, CalculatorEventComponent } from './calculator-container/calculator-container.component';
import { FormsModule } from '@angular/forms';
import { TodoListComponent } from './todo-list/todo-list.component';
import locFi from '@angular/common/locales/fi';
import { registerLocaleData } from '@angular/common';
import { PluralPipe } from './pipes/plural.pipe';
import { SortPipe } from './pipes/sort.pipe';
import { TodoService } from './services/todo.service';
import { HttpClientModule } from '@angular/common/http';
import { DetailModule } from './detail/detail.module';
registerLocaleData(locFi);

@NgModule({
  declarations: [
    AppComponent,
    CalculatorContainerComponent,
    CalculatorEffectiveComponent,
    CalculatorEventComponent,
    TodoListComponent,
    PluralPipe,
    SortPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    DetailModule
  ],
  providers: [TodoService, LeaveRouteGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
