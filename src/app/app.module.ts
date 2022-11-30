import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HiddenPropertyComponent } from './hidden-property/hidden-property.component';
import { SwitchCaseComponent } from './switch-case/switch-case.component';
import { NgforComponent } from './ngfor/ngfor.component';
import { InputFormatsDirective } from './input-formats.directive';
import { ContactFormComponent } from './contact-form/contact-form.component';

@NgModule({
  declarations: [
    AppComponent,
    HiddenPropertyComponent,
    SwitchCaseComponent,
    NgforComponent,
    InputFormatsDirective,
    ContactFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
