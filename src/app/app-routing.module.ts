import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ROUTING_PATH } from './core/const/routing-path.const';
import { LoginPageComponent } from './love-awakened/login-page/login-page.component';
import { CIActorComponent } from './love-awakened/select-actor/ci-actor/ci-actor.component';
import { SelectActorComponent } from './love-awakened/select-actor/select-actor.component';

const routes: Routes = [
  {
    path: ROUTING_PATH.CYRUS,
    component: CIActorComponent,
  },
  {
    path: ROUTING_PATH.CHOOSE_LOVER,
    component: SelectActorComponent,
  },
  {
    path: ROUTING_PATH.LOGIN,
    component: LoginPageComponent,
  },
  {
    path: '',
    component: LoginPageComponent,
  },
  {
    path: '**',
    component: LoginPageComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
