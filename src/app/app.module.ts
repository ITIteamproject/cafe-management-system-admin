import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatrialModule } from './matrial.module';
import { FlexLayoutModule } from '@angular/flex-layout';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ContentComponent } from './content/content.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProductsComponent } from './products/products.component';
import { AddItemComponent } from './add-item/add-item.component';
import { UpdateItemComponent } from './update-item/update-item.component';
import { LoginComponent } from './login/login.component';
import { HttpClientModule } from '@angular/common/http';
import { ErrorComponent } from './error/error.component';



@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent,
    ContentComponent,
    ProductsComponent,
    AddItemComponent,
    UpdateItemComponent,
    LoginComponent,
    ErrorComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    MatrialModule,
    FontAwesomeModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,

  ],
  entryComponents: [AddItemComponent, UpdateItemComponent],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
