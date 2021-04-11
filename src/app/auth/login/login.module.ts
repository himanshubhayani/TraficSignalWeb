import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login.component';
import { LoginService } from './login.service';
import { SharedModule } from 'src/app/shared/shared.module';
const routes: Routes = [
    { path: '', component: LoginComponent }
];

@NgModule({
    declarations: [
        LoginComponent
    ],
    imports: [
        SharedModule,
        RouterModule.forChild(routes),
    ],
    providers: [
        LoginService
    ],
    exports: [RouterModule]
})
export class LoginModule { }
