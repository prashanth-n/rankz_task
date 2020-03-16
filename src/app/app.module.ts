import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { HeaderComponentComponent } from './header-component/header-component.component';
import { EarningsComponentComponent } from './earnings-component/earnings-component.component';
import { SuggestedProjectsComponentComponent } from './suggested-projects-component/suggested-projects-component.component';
import { ActivityComponentComponent } from './activity-component/activity-component.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponentComponent,
    EarningsComponentComponent,
    SuggestedProjectsComponentComponent,
    ActivityComponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
