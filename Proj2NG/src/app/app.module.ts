import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { MatTabsModule } from '@angular/material/tabs';
import { MatExpansionModule, MatAccordion } from '@angular/material/expansion';

import { AppComponent } from './app.component';
import { LoginComponent } from './component/login/login.component';
import { TopBannerComponent } from './component/top-banner/top-banner.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavComponent } from './component/nav/nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatDividerModule } from '@angular/material/divider';
import { MatRadioModule } from '@angular/material/radio';
import { MatFormFieldModule, MatFormFieldControl } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input'
import { NotesComponent } from './component/notes/notes.component';
import { CourseComponent } from './component/course/course.component';
import { MatCardModule } from '@angular/material/card';
import { MatTooltipModule } from '@angular/material/tooltip';
import { LandingComponent } from './component/landing/landing.component';
import { CreateAccountComponent } from './component/create-account/create-account.component';
import { MatSelectModule } from '@angular/material/select';

import { ErrorStateMatcher, ShowOnDirtyErrorStateMatcher } from '@angular/material/core';
import { DashboardComponent } from './component/dashboard/dashboard.component';
import { UploadFileDialogComponent } from './component/dialogs/upload-file-dialog/upload-file-dialog.component';
import { AddUsersDialogComponent } from './component/dialogs/add-users-dialog/add-users-dialog.component';
import { MatDialogModule } from '@angular/material/dialog';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    TopBannerComponent,
    NavComponent,
    NotesComponent,
    LandingComponent,
    CreateAccountComponent,
    CourseComponent,
    DashboardComponent,
    UploadFileDialogComponent,
    AddUsersDialogComponent
  ],
  entryComponents: [
    CourseComponent,
    UploadFileDialogComponent,
    AddUsersDialogComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatSelectModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatRadioModule,
    MatListModule,
    MatDividerModule,
    MatCheckboxModule,
    MatTabsModule,
    MatCardModule,
    MatInputModule,
    MatExpansionModule,
    MatFormFieldModule,
    MatTooltipModule,
    MatDialogModule
  ],
  providers: [
    {provide: ErrorStateMatcher, useClass: ShowOnDirtyErrorStateMatcher}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
