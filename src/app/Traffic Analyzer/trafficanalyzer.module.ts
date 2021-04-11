import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';
import { GlobalConfigurationService } from '../Global Configuration/globalconfiguration.service';
import { TrafficAnalyzerComponent } from './trafficanalyzer.component';
import { TrafficAnalyzerService } from './trafficanalyzer.service';
const routes: Routes = [
    { path: '', component: TrafficAnalyzerComponent }
];

@NgModule({
    declarations: [
        TrafficAnalyzerComponent
    ],
    imports: [
        SharedModule,
        RouterModule.forChild(routes),
    ],
    exports: [RouterModule],
    providers:[
        TrafficAnalyzerService
    ]
})
export class TrafficAnalyzerModule { }
