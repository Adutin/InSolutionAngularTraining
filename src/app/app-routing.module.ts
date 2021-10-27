import { Injectable, NgModule } from '@angular/core';
import { Routes, RouterModule, ActivatedRouteSnapshot, RouterStateSnapshot, CanDeactivate, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { CalculatorContainerComponent } from './calculator-container/calculator-container.component';
import { TodoListComponent } from './todo-list/todo-list.component';


@Injectable()
export class LeaveRouteGuard implements CanDeactivate<any> {
  constructor(private router: Router) {

  }

  canDeactivate(
    component: any,
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> | boolean {
    localStorage.setItem('previousRoute', this.router.url);
    return true;
  }
}

const routes: Routes = [
  { path: '', component: TodoListComponent, canDeactivate: [LeaveRouteGuard] },
  { path: 'calculator', component: CalculatorContainerComponent, canDeactivate: [LeaveRouteGuard] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
