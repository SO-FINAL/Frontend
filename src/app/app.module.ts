import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './login/pages/login/login.component';
import { DigiHeaderComponent } from 'src/shared/components/digi-header/digi-header.component';
import { HomeComponent } from './home/pages/home/home.component';
import { ProductItemComponent } from './home/components/product-item/product-item.component';
import { ProductListComponent } from './home/components/product-list/product-list.component';
import { HttpClientModule } from '@angular/common/http';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DigiHeaderComponent,
    HomeComponent,
    ProductItemComponent,
    ProductListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatButtonModule,
    MatCardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
