import { AuthGuard } from './AuthGuard';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {path:'',loadChildren:()=>import('./theme-one/theme-one.module').then(x=>x.ThemeOneModule),canActivate:[AuthGuard],data:{role:['admin','user']}}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
