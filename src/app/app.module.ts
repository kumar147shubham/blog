import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { MatSliderModule } from '@angular/material/slider';
import { UsersComponent } from './users/users.component';
import { UserListComponent } from './user-list/user-list.component';
import { AdminListComponent } from './admin-list/admin-list.component';
import { LazyloadingcomponentComponent } from './lazyloadingcomponent/lazyloadingcomponent.component';
import { RicheditComponent } from './richedit/richedit.component'
import { HttpClientModule } from '@angular/common/http';
import { PdfViewerModule } from 'ng2-pdf-viewer';
import {  NgxExtendedPdfViewerModule} from 'ngx-extended-pdf-viewer';
import { PdfviewerComponent } from './pdfviewer/pdfviewer.component';
import { NavComponent } from './nav/nav.component';
import { HomeComponent } from './home/home.component';
import { RichedithomeComponent } from './richedithome/richedithome.component';
import { TestngxextendedpdfviewerComponent } from './testngxextendedpdfviewer/testngxextendedpdfviewer.component';
import { FormlyvalidationComponent } from './formlyvalidation/formlyvalidation.component';
import { FormlyModule } from '@ngx-formly/core';
import { FormlyMaterialModule} from '@ngx-formly/material';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    UsersComponent,
    UserListComponent,
    AdminListComponent,
    LazyloadingcomponentComponent,
    RicheditComponent,
    PdfviewerComponent,
    NavComponent,
    HomeComponent,
    RichedithomeComponent,
    TestngxextendedpdfviewerComponent,
    FormlyvalidationComponent,
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatSliderModule,
    ReactiveFormsModule,
    HttpClientModule,
    PdfViewerModule,
    NgxExtendedPdfViewerModule,
    FormlyModule.forRoot(),
    FormlyMaterialModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
