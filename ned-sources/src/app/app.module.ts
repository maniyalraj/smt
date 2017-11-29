import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule, ErrorHandler } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app.routing.module';
import { LoginModule } from './modules/login/login.module';
import { ProgrammingServicesModule } from './modules/programming-services/programming-services.module';

import { ProgServService } from './services/prog-serv.service';
import { LookupService } from './services/lookups/lookup.service';
import { GlobalErrorHandlerService } from './services/error-handler/global-error-handler.service';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { LookupsComponent } from './components/lookups/lookups.component';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    SidebarComponent,
    PageNotFoundComponent,
    LookupsComponent
  ],
  imports: [
    NgbModule.forRoot(),
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpModule,
    ProgrammingServicesModule,
    LoginModule,
    AppRoutingModule
  ],
  providers: [
    {
      provide: ErrorHandler,
      useClass: GlobalErrorHandlerService
    },
    ProgServService,
    LookupService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
