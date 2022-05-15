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


@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    LoginPageComponent,
    LoadingComponent,
    CIActorComponent,
    LKActorComponent,
    SelectActorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
