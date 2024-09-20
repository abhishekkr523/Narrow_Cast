import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignupComponent } from './auth/signup.component';

const routes: Routes = [
  { path: 'signup', component: SignupComponent },
  // Add other routes here
  { path: '', redirectTo: '/signup', pathMatch: 'full' }, // Redirect to signup by default
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
