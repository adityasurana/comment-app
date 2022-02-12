import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FeedbackComponent } from './feedback/feedback.component';
import { AddFeedbackComponent } from './add-feedback/add-feedback.component';
import { RegisterComponent } from './register/register.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { AuthComponent } from './auth/auth.component';
import { AuthGuard } from './auth/auth.guard'

const appRoutes: Routes = [
  { path: '', component: AuthComponent},
  { path: 'register', component: RegisterComponent},
  { path: 'forgot-password', component: ForgotPasswordComponent},
  { path: 'feedback', component: FeedbackComponent, canActivate:[AuthGuard]},
  { path: 'add-feedback', component: AddFeedbackComponent, canActivate:[AuthGuard]},
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
