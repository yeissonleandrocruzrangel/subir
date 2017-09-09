import {RouterModule, Routes} from '@angular/router';
import {IndexComponent} from './customers/index/index.component';
import {AddComponent as orderAddComponent} from './orders/add/add.component'

const appRoutes: Routes = [
  {path: 'customers/index', component: IndexComponent},
  {path: 'orders/add', component: orderAddComponent},
];

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {CustomersModule} from './customers/customers.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { CurrentOptionComponent } from './current-option/current-option.component';
import { AddComponent } from './orders/add/add.component';
import { ListComponent } from './list/list/list.component';
import {OrdersModule} from './orders/orders.module'

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    CurrentOptionComponent,
    AddComponent,
    ListComponent
  ],
  imports: [
    BrowserModule,
    CustomersModule,
    OrdersModule,
    RouterModule.forRoot(
      appRoutes
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
