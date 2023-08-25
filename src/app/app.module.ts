import { APP_INITIALIZER, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ContainerComponent } from './container/container.component';
import { EmployeeComponent } from './employee/employee.component';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http'
import { RequestInterceptor } from './request.interceptor';
import { InitService } from './init.service';
import { AppNavComponent } from './app-nav/app-nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { NotfoundComponent } from './notfound/notfound.component';

import {FormsModule} from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { HoverDirective } from './hover.directive';
import { EmailvalidatorDirective } from './emailValidator/emailvalidator.directive'
// import { RoomsModule } from './rooms/rooms.module';
import { HeaderModule } from './header/header.module';
import { RouteConfigToken } from './rooms/services/routeConfig.service';

// initFactory funtion
function initFactory(initService: InitService){
  return () => initService.init();
}

@NgModule({
  declarations: [
    AppComponent,
    ContainerComponent,
    EmployeeComponent,
    AppNavComponent,
    NotfoundComponent,
    LoginComponent,
    HoverDirective,
    EmailvalidatorDirective
  ], //This property is an array that specifies the components, directives, and pipes that belong to this module. this is for dependency injection
  imports: [
    BrowserModule,

    BrowserAnimationsModule,
    HttpClientModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    FormsModule,
    // RoomsModule,
    HeaderModule,
    AppRoutingModule, // modules are loaded sequential order. If any feature module has routing then it must be loaded before appRouting module to avoid logical routing errors
  ],
  providers: [
    {
      provide: RouteConfigToken,
      useValue: {title: "Home"}
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: RequestInterceptor,
      multi: true,
    },
    {
      provide: APP_INITIALIZER,
      useFactory: initFactory,
      deps: [InitService],
      multi: true,
    },
  ],
  bootstrap: [AppComponent] //bootstrap: [AppComponent]: This property is an array that specifies the root component that should be bootstrapped when the application starts. In this case, the "AppComponent" is the root component.
})
export class AppModule { }
