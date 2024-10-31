import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {  MainViewComponent } from './views/main-view/main-view.component';
import {DragDropModule} from '@angular/cdk/drag-drop';
import { EmailConfirmComponent } from './views/email/email-confirm/email-confirm.component';
import { ResetPasswordComponent } from './views/email/reset-password/reset-password.component';
import {MatLegacyFormFieldModule as MatFormFieldModule} from '@angular/material/legacy-form-field'; 
import {MatLegacySelectModule as MatSelectModule} from '@angular/material/legacy-select';
import {MatLegacyInputModule as MatInputModule} from '@angular/material/legacy-input';
import {MatIconModule} from '@angular/material/icon';
import {MatDividerModule} from '@angular/material/divider';
import {MatLegacyButtonModule as MatButtonModule} from '@angular/material/legacy-button';
import {MatLegacyDialogModule as MatDialogModule} from '@angular/material/legacy-dialog';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './views/email/login/login.component'; 
import { ReactiveFormsModule } from '@angular/forms';
import { RegisterComponent } from './views/email/register/register.component';
@NgModule({
  declarations: [
    AppComponent,
    MainViewComponent,
    EmailConfirmComponent,
    ResetPasswordComponent,
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DragDropModule,
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule,
    MatIconModule,
    MatDividerModule,
    MatButtonModule,
    MatDialogModule,
    BrowserAnimationsModule,
    ReactiveFormsModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
