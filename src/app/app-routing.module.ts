import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IssuePageComponent } from './pages/issue/issue.component';
import { MapPageComponent } from './pages/map/map.component';
import { ReportPageComponent } from './pages/report/report.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'map' },
  { path: 'map', component: MapPageComponent },
  { path: 'report', component: ReportPageComponent },
  { path: 'issue/:id', component: IssuePageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
