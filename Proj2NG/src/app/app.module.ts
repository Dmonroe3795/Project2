import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { MatTabsModule } from '@angular/material/tabs';
import { MatExpansionModule } from '@angular/material/expansion';

import { AppComponent } from './app.component';
import { LoginComponent } from './component/login/login.component';
import { TopBannerComponent } from './component/top-banner/top-banner.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavComponent } from './nav/nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import {MatFormFieldModule} from '@angular/material/form-field';
import { NotesComponent } from './component/notes/notes.component';

import { LandingComponent } from './component/landing/landing.component';
import { CreateAccountComponent } from './create-account/create-account.component';
import {MatSelectModule} from '@angular/material/select';

import { ErrorStateMatcher, ShowOnDirtyErrorStateMatcher } from '@angular/material/core';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    TopBannerComponent,
    NavComponent,
    NotesComponent,
    LandingComponent,
    CreateAccountComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatSelectModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatTabsModule,
    MatExpansionModule,
    MatFormFieldModule
  ],
  providers: [
    {provide: ErrorStateMatcher, useClass: ShowOnDirtyErrorStateMatcher}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
