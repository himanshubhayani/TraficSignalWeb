import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './commonService/auth-guard.service';


const routes: Routes = [
  { path: '', redirectTo: 'analyzer', pathMatch: 'full' },
  { path: 'analyzer', loadChildren: () => import('./Traffic Analyzer/trafficanalyzer.module').then(m => m.TrafficAnalyzerModule), canActivate: [AuthGuard] },
  { path: 'login', loadChildren: () => import('./auth/login/login.module').then(m => m.LoginModule) },
  { path: 'signup', loadChildren: () => import('./auth/signup/signup.module').then(m => m.SignupModule) },
  { path: 'global-configuration', loadChildren: () => import('./Global Configuration/GlobalConfiguration.module').then(m => m.GlobalConfigurationModule), canActivate: [AuthGuard] },
  { path: '**', loadChildren: () => import('./Traffic Analyzer/trafficanalyzer.module').then(m => m.TrafficAnalyzerModule), canActivate: [AuthGuard] }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
