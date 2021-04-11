import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { HttpService } from './commonService/http-service';
import { CommonService } from './commonService/common.service';
import { AuthGuard } from './commonService/auth-guard.service';
import { JwtModule } from '@auth0/angular-jwt';
import { HeaderModule } from './layout/header/header.module';
import { EventEmitterService } from './commonService/event-emiter.service';

export function tokenGetter() {
  return localStorage.getItem('access_token');
}
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    HeaderModule,
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,

    JwtModule.forRoot({
      config: {
        tokenGetter: tokenGetter,
        skipWhenExpired: true,
        // whitelistedDomains: environment.whitelistedDomains,
        // blacklistedRoutes: environment.blacklistedRoutes
      }
    }),
  ],
  providers: [
    HttpService,
    AuthGuard,
    CommonService, EventEmitterService,],
  bootstrap: [AppComponent]
})
export class AppModule { }
