import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { OverViewComponent } from './marketing/overview/overview.component';
import {ExpandMenuDirective} from './shared/expand-menu-directive';
import { ChartComponent } from './marketing/overview/chart/chart.component';
import { ScheduleComponent } from './marketing/schedule/schedule.component';

@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    OverViewComponent,
    ExpandMenuDirective,
    ChartComponent,
    ScheduleComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    FormsModule,
    AppRoutingModule,
    RouterModule.forRoot([
      { path: '', component: OverViewComponent, pathMatch: 'full' },
      { path: 'marketing/schedule', component: ScheduleComponent},
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
