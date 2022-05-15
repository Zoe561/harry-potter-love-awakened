import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ROUTING_PATH } from './core/const/routing-path.const';
import { LoginPageComponent } from './love-awakened/login-page/login-page.component';
import { AlsActorComponent } from './love-awakened/select-actor/als-actor/als-actor.component';
import { CIActorComponent } from './love-awakened/select-actor/ci-actor/ci-actor.component';
import { LKActorComponent } from './love-awakened/select-actor/lk-actor/lk-actor.component';
import { LllActorComponent } from './love-awakened/select-actor/lll-actor/lll-actor.component';
import { RgActorComponent } from './love-awakened/select-actor/rg-actor/rg-actor.component';
import { SelectActorComponent } from './love-awakened/select-actor/select-actor.component';
import { YsActorComponent } from './love-awakened/select-actor/ys-actor/ys-actor.component';

const routes: Routes = [
  {
    path: ROUTING_PATH.ALYUSS,
    component: AlsActorComponent,
  },
  {
    path: ROUTING_PATH.CYRUS,
    component: CIActorComponent,
  },
  {
    path: ROUTING_PATH.RHEIN,
    component: LKActorComponent,
  },
  {
    path: ROUTING_PATH.LI_CJI_LI,
    component: LllActorComponent,
  },
  {
    path: ROUTING_PATH.RUOGU,
    component: RgActorComponent,
  },
  {
    path: ROUTING_PATH.YEH_SYUN,
    component: YsActorComponent,
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
