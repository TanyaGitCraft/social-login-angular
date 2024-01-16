import { Routes } from '@angular/router'
import { LoginButtonsComponent, UserDetailsComponent } from './components'

export const routes: Routes = [
  {
    path: '',
    component: LoginButtonsComponent,
  },
  {
    path:'user-details',
    component:UserDetailsComponent
  }
]
