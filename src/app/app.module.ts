import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {FormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { InterceptorService } from './@core/interceptors/interceptor.service';
import { NavbarLeftComponent } from './layouts/navigation/navbar-left/navbar-left.component';
import { NavigationComponent } from './layouts/navigation/navigation/navigation.component';
import { ResizerComponent } from './layouts/navigation/resizer/resizer.component';
import { SidebarComponent } from './layouts/navigation/sidebar/sidebar.component';
import { PrimengModule } from 'src/@rah/primeng-store/primeng/primeng.module';

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
    BrowserAnimationsModule
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: InterceptorService,
    multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
