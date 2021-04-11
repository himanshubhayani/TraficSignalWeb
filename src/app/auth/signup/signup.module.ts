import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';
import { SignupComponent } from './signup.component';
import { SignupService } from './signup.service';
const routes: Routes = [
    { path: '', component: SignupComponent }
];

@NgModule({
    declarations: [
        SignupComponent
    ],
    imports: [
        SharedModule,
        RouterModule.forChild(routes),
    ],
    providers: [
        SignupService
    ],
    exports: [RouterModule]
})
export class SignupModule { }
