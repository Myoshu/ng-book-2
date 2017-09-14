import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormSkuComponent } from './form-sku/form-sku.component';
import { FormSkuWithBuilderComponent } from './form-sku-with-builder/form-sku-with-builder.component';

@NgModule({
  declarations: [
    AppComponent,
    FormSkuComponent,
    FormSkuWithBuilderComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
