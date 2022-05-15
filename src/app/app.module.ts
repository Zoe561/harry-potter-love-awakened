import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LayoutComponent } from './layout/layout.component';
import { LoginPageComponent } from './love-awakened/login-page/login-page.component';
import { LoadingComponent } from './loading/loading.component';

import { SelectActorComponent } from './love-awakened/select-actor/select-actor.component';
import { CIActorComponent } from './love-awakened/select-actor/ci-actor/ci-actor.component';
import { LKActorComponent } from './love-awakened/select-actor/lk-actor/lk-actor.component';
import { AlsActorComponent } from './love-awakened/select-actor/als-actor/als-actor.component';
import { LllActorComponent } from './love-awakened/select-actor/lll-actor/lll-actor.component';
import { RgActorComponent } from './love-awakened/select-actor/rg-actor/rg-actor.component';
import { YsActorComponent } from './love-awakened/select-actor/ys-actor/ys-actor.component';
import { CreditsModalComponent } from './love-awakened/login-page/modal/credits-modal/credits-modal.component';
import { NgbAlertModule, NgbPaginationModule, NgbModule } from '@ng-bootstrap/ng-bootstrap';


@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    LoginPageComponent,
    LoadingComponent,
    CIActorComponent,
    LKActorComponent,
    SelectActorComponent,
    AlsActorComponent,
    LllActorComponent,
    RgActorComponent,
    YsActorComponent,
    CreditsModalComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
