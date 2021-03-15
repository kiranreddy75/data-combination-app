import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PlatformComponent } from './dashboard/platform/platform.component';
import { UserComponent } from './dashboard/user/user.component';

const routes: Routes = [
  {path: 'home', component: PlatformComponent},
  {path: 'dashboard', component: PlatformComponent},
  {path: 'Dazzlesphere', component: UserComponent},
  {path: 'Yabox', component: UserComponent},
  {path: 'Kwideo', component: UserComponent},
  {path: '', component: PlatformComponent},
  {path: '**', component: DashboardComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
