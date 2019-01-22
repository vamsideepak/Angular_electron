import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ReadcardComponent } from './components/readcard/readcard.component';
import { LoginComponent } from './components/login/login.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { LogoutComponent } from './components/logout/logout.component';
import { CarddataComponent } from './components/carddata/carddata.component';
import { CameraComponent } from './components/camera/camera.component';

const routes: Routes = [
  { 
    path: '', 
    redirectTo: '/login', 
    pathMatch: 'full'
   },
   { 
    path: 'login', 
    component: LoginComponent 
  },
  { 
    path: 'readcard',
    component: ReadcardComponent
  },
  { 
    path: 'camera',
    component: CameraComponent
  },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
