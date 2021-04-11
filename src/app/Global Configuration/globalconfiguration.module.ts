
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { GlobalConfigurationComponent } from './globalconfiguration.component';
import { GlobalConfigurationService } from './globalconfiguration.service';
const routes: Routes = [
    {
        path: '',
        component: GlobalConfigurationComponent
    }
];

@NgModule({
    declarations: [
        GlobalConfigurationComponent
    ],
    imports: [
        SharedModule,
        RouterModule.forChild(routes),
    ],
    exports: [
        RouterModule
    ],
    providers:[
        GlobalConfigurationService
    ]
})
export class GlobalConfigurationModule {
}

