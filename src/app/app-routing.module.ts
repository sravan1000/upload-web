import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// import { filesInfo } from './components/files-info';
import { FilesInfoComponent } from './components/files-info/files-info.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { UploadComponent } from './components/upload/upload.component';
import { PublicComponent } from './components/public/public.component';
import { LogoutComponent } from './components/logout/logout.component';

const routes: Routes = [
  {
    path: 'login' ,
    component: LoginComponent
  },
  {
    path: 'home' ,
    component: FilesInfoComponent
  },
  {
    path: 'register' ,
    component: RegisterComponent
  },
  {
    path: 'upload',
    component: UploadComponent
  },
  {
    path: 'public',
    component: PublicComponent
  },
  {
    path: 'logout',
    component: LogoutComponent
  }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const routingComponents = [FilesInfoComponent, LoginComponent, RegisterComponent, UploadComponent, PublicComponent, LogoutComponent]
