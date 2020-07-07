import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http'
import{PdfViewerModule} from 'ng2-pdf-viewer';
import { InlineSVGModule } from 'ng-inline-svg';
import { from } from 'rxjs';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PdfViewerModule, //ng2-pdf-viewer module to view pdf
    HttpClientModule, // this allows use the http of the pdf
    InlineSVGModule.forRoot() 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
