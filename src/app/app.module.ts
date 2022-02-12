import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AuthComponent } from './auth/auth.component';
import { AuthGuard } from './auth/auth.guard'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { RegisterComponent } from './register/register.component';
import { FeedbackComponent } from './feedback/feedback.component';
import { AddFeedbackComponent } from './add-feedback/add-feedback.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { SearchFeedbackPipe } from './feedback/searchFeedback.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    AuthComponent,
    RegisterComponent,
    FeedbackComponent,
    AddFeedbackComponent,
    ForgotPasswordComponent,
    SearchFeedbackPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule,
  ],
  providers: [AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
