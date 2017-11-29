import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//import { ProgrammingServiceComponent } from './modules/programming-services/programming-service/programming-service.component';
/*import { UserComponent } from './_modules/users/user/user.component';*/
import { AdvancedSearchComponent } from './modules/programming-services/advanced-search/advanced-search.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { EditProgServiceComponent } from './modules/programming-services/edit-prog-service/edit-prog-service.component';
import { LoginComponent } from './modules/login/login/login.component';
import { LogoutComponent } from './modules/login/logout/logout.component';
import { AuthenticationGuard } from './guards/authentication.guard';
import { DemoComponent } from './modules/programming-services/demo/demo.component';

const appRoutes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'logout', component: LogoutComponent },
  { path: 'advanced-search', component: AdvancedSearchComponent, canActivate: [AuthenticationGuard] },
  { path: 'edit-prog-service/:progServiceId', component: EditProgServiceComponent, canActivate: [AuthenticationGuard] },
  { path: 'demo', component: DemoComponent, canActivate: [AuthenticationGuard] },
  /*{ path: 'user-management', component: UserComponent, canActivate: [AuthGuard] },*/
  { path: '', redirectTo: '/advanced-search', pathMatch: 'full' },//default path
  { path: '**', component: PageNotFoundComponent, canActivate: [AuthenticationGuard] }
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: false } // <-- debugging purposes only
    )
  ],
  exports: [
    RouterModule
  ],
  providers: [
    AuthenticationGuard
  ]
})
export class AppRoutingModule { }