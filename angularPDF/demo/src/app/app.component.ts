import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';


declare var jQuery: any; // not really sure what this does

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  //title of the app, don't know where this is used
  title = 'viewer2Angular';
  
  //probably constructs the http client request
  constructor(private http:HttpClient){}
  //url of the pdf
  pdfSrc='https://raw.githubusercontent.com/mozilla/pdf.js/ba2edeae/web/compressed.tracemonkey-pldi-09.pdf'
  
  //Add more variable here (for the buttons)
  rotation = 0;
  zoom = 1.0;

  /** 
   * Function that allows the user to view a local file using the viewer
   * Will not be here in the final version
  */
  openLocalFile() {
    jQuery('#file').trigger('click');
  }

  /**
   * Render PDF preview on selecting file
   * Tied with openLocalFile, will not be in final version
   */
  onFileSelected() {
    const $pdf: any = document.querySelector('#file');

    if (typeof FileReader !== 'undefined') {
      const reader = new FileReader();

      reader.onload = (e: any) => {
        this.pdfSrc = e.target.result;
      };

      reader.readAsArrayBuffer($pdf.files[0]);
    }
  }

  /**
   * Rotate the pdf
   */
  rotate(angle: number) {
    this.rotation += angle;
  }
  
  /**
   * Makes PDF large, use with negative number to shrink pdf
   * @param amount The percentage of zoom (Can be negative)
   */
  incrementZoom(amount: number) {
    this.zoom += amount;
  }

  shareBox(){
    var box = document.getElementById("share");
    box.style.visibility = "visible";
  }

  closeShare(){
    var box = document.getElementById("share");
    box.style.visibility = "hidden";
  }

}
 