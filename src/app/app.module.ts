import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContainerComponent } from './container/container/container.component';
import { UserContainerComponent } from './user/user-container/user-container.component';
import { UserListComponent } from './user/user-list/user-list.component';
import { UserDetailComponent } from './user/user-detail/user-detail.component';
import { OrderContainerComponent } from './order/order-container/order-container.component';
import { EmptyComponent } from './empty/empty/empty.component';
import { NavbarComponent } from './navbar/navbar/navbar.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    ContainerComponent,
    UserContainerComponent,
    UserListComponent,
    UserDetailComponent,
    OrderContainerComponent,
    EmptyComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
