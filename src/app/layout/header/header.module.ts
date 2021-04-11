import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';
import { HeaderComponent } from './header.component';
import { HeaderService } from './header.service';
@NgModule({
    declarations: [
        HeaderComponent
    ],
    imports: [
        SharedModule,
    ],
    providers: [
        HeaderService
    ],
    exports: [HeaderComponent]
})
export class HeaderModule { }
