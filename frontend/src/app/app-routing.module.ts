import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
 
const routes: Routes = [
  { path: '', redirectTo: 'imported-jobs/select-country', pathMatch: 'full' },
  { path: 'login', component: LoginComponent  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
