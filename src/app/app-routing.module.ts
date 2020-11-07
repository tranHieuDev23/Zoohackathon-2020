import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AccountPageComponent } from './pages/account/account.component';
import { AllIssuePageComponent } from './pages/all-issue/all-issue.component';
import { IssuePageComponent } from './pages/issue/issue.component';
import { MapPageComponent } from './pages/map/map.component';
import { NotificationsPageComponent } from './pages/notifications/notifications.component';
import { ReportPageComponent } from './pages/report/report.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'map' },
  { path: 'map', component: MapPageComponent },
  { path: 'report', component: ReportPageComponent },
  { path: 'all-issue', component: AllIssuePageComponent },
  { path: 'notifications', component: NotificationsPageComponent },
  { path: 'account', component: AccountPageComponent },
  { path: 'issue/:id', component: IssuePageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
