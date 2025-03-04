import { Routes } from '@angular/router'
import { MainLayoutComponent } from '@layouts/main-layout/main-layout.component'
import { RegisterLayoutComponent } from '@layouts/register-layout/register-layout.component'
import { HomeComponent } from '@pages/home/home.component'
import { LoginComponent } from '@pages/login/login.component'
import { RegisterComponent } from '@pages/register/register.component'

export const routes: Routes = [
  {
    path: '',
    component: MainLayoutComponent,
    children: [{ path: '', component: HomeComponent, pathMatch: 'full' }]
  },
  {
    path: '',
    component: RegisterLayoutComponent,
    children: [
      { path: 'register', component: RegisterComponent },
      { path: 'login', component: LoginComponent }
    ]
  }
]
