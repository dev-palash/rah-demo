import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {FormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { InterceptorService } from './@core/interceptors/interceptor.service';
import { NavbarLeftComponent } from './layouts/navigation/navbar-left/navbar-left.component';
import { NavigationComponent } from './layouts/navigation/navigation/navigation.component';
import { ResizerComponent } from './layouts/navigation/resizer/resizer.component';
import { SidebarComponent } from './layouts/navigation/sidebar/sidebar.component';
import { PrimengModule } from 'src/@rah/primeng-store/primeng/primeng.module';
import { environment } from 'src/environments/environment';
import { AkitaNgDevtools } from '@datorama/akita-ngdevtools';
import { AkitaNgRouterStoreModule } from '@datorama/akita-ng-router-store';
import { NG_ENTITY_SERVICE_CONFIG } from '@datorama/akita-ng-entity-service';
import { QuillModule } from 'ngx-quill';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzSpinModule } from 'ng-zorro-antd/spin';
import { NzDrawerService } from 'ng-zorro-antd/drawer';
import { NzModalService } from 'ng-zorro-antd/modal';
import {OverlayModule} from '@angular/cdk/overlay';
@NgModule({
  declarations: [
    AppComponent,
    NavbarLeftComponent,
    NavigationComponent,
    ResizerComponent,
    SidebarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PrimengModule,
    FormsModule,
    BrowserAnimationsModule,
    HttpClientModule,
    environment.production ? [] : AkitaNgDevtools,
    AkitaNgRouterStoreModule,
    QuillModule.forRoot(),
    NzSpinModule,
    NzIconModule.forRoot([]),
    OverlayModule
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: InterceptorService,
    multi: true
  },
  {
    provide: NG_ENTITY_SERVICE_CONFIG,
    useValue: { baseUrl: 'https://jsonplaceholder.typicode.com' }
  },
  NzDrawerService,
  NzModalService
],
  bootstrap: [AppComponent]
})
export class AppModule { }
