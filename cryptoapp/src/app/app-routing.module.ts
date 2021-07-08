import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { MyPortFolioComponent } from './my-port-folio/my-port-folio.component';
import { RegistrationComponent } from './registration/registration.component';
import { AuthGuard } from './_helpers/auth.guard';

const routes: Routes = [ { path: '', component: HomeComponent, canActivate: [AuthGuard] },
{ path: 'login', component: LoginComponent },
{ path: 'register', component: RegistrationComponent },
{path:'MyProfile',component: MyPortFolioComponent,canActivate: [AuthGuard]},
// otherwise redirect to home
{ path: '**', redirectTo: '' }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})


export class AppRoutingModule { }
