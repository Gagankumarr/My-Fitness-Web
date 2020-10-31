import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { TrainingComponent } from './training/training.component';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';
import { FAQComponent } from './faq/faq.component';
import { FranchiseComponent } from './franchise/franchise.component';
import { TermsconditionComponent } from './termscondition/termscondition.component';
import { FeedbackComponent } from './feedback/feedback.component';
import { ContinuedopComponent } from './continuedop/continuedop.component';
import { LoginComponent } from './login/login.component';
import {HeaderComponent} from './header/header.component'

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HomeComponent,
    TrainingComponent,
    ContactComponent,
    HeaderComponent,
    AboutComponent,
    FAQComponent,
    FranchiseComponent,
    TermsconditionComponent,
    FeedbackComponent,
    ContinuedopComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
