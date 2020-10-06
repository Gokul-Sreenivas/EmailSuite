import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmailModuleComponent } from './email-module/email-module.component';
import { EmailListComponent } from './email-list/email-list.component';
import { EmailViewerComponent } from './email-viewer/email-viewer.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'email_module' },
  { path: 'email_module', component: EmailModuleComponent },
  { path: 'email_list', component: EmailListComponent },
  { path: 'email_viewer/:value', component: EmailViewerComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
