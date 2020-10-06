import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmailModuleComponent } from './email-module/email-module.component';
import { EmailService } from './email.service';
import { EmailListComponent } from './email-list/email-list.component';
import { EmailViewerComponent } from './email-viewer/email-viewer.component';
import { emailPipeFilter } from './email.filter.pipe';
// import { EmailPipe1Pipe } from './pipes/email-pipe1.pipe';

@NgModule({
  declarations: [
    AppComponent,
    EmailModuleComponent,
    EmailListComponent,
    EmailViewerComponent,
    // EmailPipe1Pipe,
    emailPipeFilter,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    NgbModule,
  ],
  providers: [EmailService],
  bootstrap: [AppComponent],
})
export class AppModule {}
