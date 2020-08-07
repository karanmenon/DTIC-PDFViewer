import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http'
import{PdfViewerModule} from 'ng2-pdf-viewer';
import { InlineSVGModule } from 'ng-inline-svg';

import { from } from 'rxjs';
import { MyDialogComponent } from './my-dialog/my-dialog.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


@NgModule({
  declarations: [AppComponent, MyDialogComponent] ,
  imports: [
    BrowserModule,
    AppRoutingModule,
    PdfViewerModule, //ng2-pdf-viewer module to view pdf
    HttpClientModule, // this allows use the http of the pdf
    InlineSVGModule.forRoot(),
    MatDialogModule,
    MatButtonModule,
    BrowserAnimationsModule
  ],
  entryComponents: [
    MyDialogComponent
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }