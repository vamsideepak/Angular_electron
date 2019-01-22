import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HttpClient, HttpRequest, HttpResponse, HttpEventType } from '@angular/common/http';
import { FormBuilder, FormGroup, Validators,ReactiveFormsModule,FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CdtaService } from './cdta.service';
import {NgxElectronModule} from 'ngx-electron';
import { ReadcardComponent } from './components/readcard/readcard.component';
import { LoginComponent } from './components/login/login.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { LogoutComponent } from './components/logout/logout.component';
import { CarddataComponent } from './components/carddata/carddata.component';
import { CameraComponent } from './components/camera/camera.component';
import {ImageCropperComponent} from 'ng2-img-cropper';

@NgModule({
  declarations: [
    AppComponent,
    ReadcardComponent,
    LoginComponent,
    DashboardComponent,
    LogoutComponent,
    CarddataComponent,
    CameraComponent,
    ImageCropperComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgxElectronModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [CdtaService],
  bootstrap: [AppComponent]
})
export class AppModule { }
