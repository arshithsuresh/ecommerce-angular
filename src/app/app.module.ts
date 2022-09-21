import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './core/header/header.component';
import { FooterComponent } from './core/footer/footer.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { ProductCardComponent } from './shared/product-card/product-card.component';
import { ProductCarouselComponent } from './product-carousel/product-carousel.component';
import { ProductOffersComponent } from './shared/product-offers/product-offers.component';
import { BrandOffersComponent } from './brand-offers/brand-offers.component';
import { ProductPageComponent } from './product-page/product-page.component';
import { ProductCatalogComponent } from './product-catalog/product-catalog.component';
import { RegisterPageComponent } from './register-page/register-page.component';
import { CartService } from './core/cart-service/cart.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    LoginComponent,
    ProductCardComponent,
    ProductCarouselComponent,
    ProductOffersComponent,
    BrandOffersComponent,
    ProductPageComponent,
    ProductCatalogComponent,
    RegisterPageComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [CartService],
  bootstrap: [AppComponent]
})
export class AppModule { }
