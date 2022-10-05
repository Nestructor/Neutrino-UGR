import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AccordionModule } from 'ngx-bootstrap/accordion';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularFireModule } from '@angular/fire/compat';
import { environment } from 'src/environments/environment';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { LoginComponent } from './login/login.component';
import { ReactiveFormsModule } from '@angular/forms';
import { NgxSpinnerModule } from 'ngx-spinner';
import { HeaderComponent } from './header/header.component';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { ResetComponent } from './reset/reset.component';
import { HomeComponent } from './home/home.component';
import { ComponenteComponent } from './componente/componente.component';
import { AuthService } from './service/auth.service';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HeaderComponent,
    ResetComponent,
    HomeComponent,
    ComponenteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AccordionModule.forRoot(),
    BrowserAnimationsModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    NgxSpinnerModule,
    BsDropdownModule.forRoot()
  ],
  providers: [
    AngularFireAuth,
    AuthService,
  ],
  exports: [
    NgxSpinnerModule,
  ],
  schemas:[CUSTOM_ELEMENTS_SCHEMA],
  bootstrap: [AppComponent]
})
export class AppModule { }
