import { AuthGuardGuard } from './service/auth-guard.guard';
import { EFormComponent } from './e-form/e-form.component';
import { BBasicComponent } from './b-basic/b-basic.component';
import { AllPipeComponent } from './all-pipe/all-pipe.component';
import { ACliComponent } from './a-cli/a-cli.component';
import { NavComponent } from './test-moduel/nav/nav.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ServComponent } from './serv/serv.component';


const routes: Routes = [
  {path:'',redirectTo:'nav',pathMatch:'full'},
  {path:'nav',component:NavComponent},
  {path:'cli',component:ACliComponent,canActivate:[AuthGuardGuard]},
  {path:'pipe',component:AllPipeComponent,canActivate:[AuthGuardGuard]},
  {path:'basic',component:BBasicComponent,canActivate:[AuthGuardGuard]},
  {path:'form',component:EFormComponent,canActivate:[AuthGuardGuard]},
  {path:'sev',component:ServComponent,canActivate:[AuthGuardGuard]},
  {path:'sev/:id',component:ServComponent,canActivate:[AuthGuardGuard]},
  { path: 'home', loadChildren: () => import('./new-module/new-module.module').then(m => m.NewModuleModule)},
  {path:'test',loadChildren:()=>import('./new-module/new-module.module').then(x=>x.NewModuleModule)},
  {path:'**',component:NavComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
