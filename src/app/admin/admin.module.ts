import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProductCardComponent } from '../shared/product-card/product-card.component';
import { RatingComponent } from '../shared/rating/rating.component';
import { ModalDisplayComponent } from '../modal-display/modal-display.component';
import { ErrorManagementComponent } from '../error-management/error-management.component';
import { HeaderComponent } from './header/header.component';
import { SideBarComponent } from './side-bar/side-bar.component';
import { ToatsComponent } from './toats/toats.component';
import { LoginComponent } from './login/login.component';
import { CreateProductComponent } from './create-product/create-product.component';


@NgModule({
  declarations: [
    DashboardComponent,
    RatingComponent,
    ProductCardComponent,
    ModalDisplayComponent,
    ErrorManagementComponent,
    HeaderComponent,
    SideBarComponent,
    ToatsComponent,
    LoginComponent,
    CreateProductComponent   
  ],
  imports: [    
    AdminRoutingModule,
    CommonModule,    
  ],
  exports:[
    CommonModule,
    RatingComponent,
    ProductCardComponent,
    ModalDisplayComponent,
    ErrorManagementComponent
  ]
})
export class AdminModule { }
