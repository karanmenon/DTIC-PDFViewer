import { Component, HostListener } from '@angular/core';
import { HttpClient } from '@angular/common/http'; // used for pdf viewing
import { EventManager } from '@angular/platform-browser';

declare var jQuery: any; 
declare var b64:string;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
   
})
export class AppComponent { //App Component is the PDF Viewer Component including the viewer's toolbar
  title = 'viewer2Angular';
  
  // constructs the http client request
  constructor(private http:HttpClient){}

  pdfSrc='https://raw.githubusercontent.com/mozilla/pdf.js/ba2edeae/web/compressed.tracemonkey-pldi-09.pdf'   //url of the pdf
  rotation = 0; // the angle of rotation, init position is 0
  zoom = 1.0; // the degree of zoom, default degree is 0
  name = 'ngx-sharebuttons';
  showAll= true;
  page = 1;
  keystroke = ["1", "2"];

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
   * @param angle the degree of rotation, insert negative number for left rotation
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

  /**
   * openst he share box when share button is clicked in the tool bar
   */
  shareBox(){
    var box = document.getElementById("share");
    box.style.visibility = "visible";
    var nLink= window.location.href;
    var cLink = document.getElementById("sharelink") as HTMLInputElement;
    cLink.value = nLink;
  }

  /**
   * Closes the share box when x button is clicked
   */
  closeShare(){
    var box = document.getElementById("share");
    box.style.visibility = "hidden";
  }


  /**
   * This is the funtion the turns off keystrokes
   * - Currently turns off the whole keyboard, but I think I can simlipfy to certain keystrokes if needed.
   * @param event This key that is input by the keyboard registers as a keyboard event
   */
  @HostListener('document:keydown', ['$event'])
  handleKeyboardEvent(event: KeyboardEvent) {
    console.log(event);
    this.keystroke[0] = this.keystroke[1];
    this.keystroke[1] = event.key;
    if (this.keystroke[0] == "Control" && this.keystroke[1] == "p"){
      event.preventDefault();
      console.log("hello!");
    }
    if (this.keystroke[0] == "Control" && this.keystroke[1] == "c"){
      event.preventDefault();
      console.log("hello!");
    }
  }

  /**
   * This Function disables right click only contact class div (where the PDF is)
   * @param event 
   */
  onRightClick(event) {
    event.preventDefault();
  }

  incrementPage(number) {
    this.page += number;
  }
/*
 this button converts the PDF file to Base 64 encoding

*/
fileToBase64 = (filename, filepath) => {
  return new Promise(resolve => {
    var file = new File([filename], filepath);
    var reader = new FileReader();
    // Read file content on file loaded event
    reader.onload = function(event) {
      resolve(event.target.result);
    };
    
    // Convert data to base64 
    reader.readAsDataURL(file);
  });
}

//this button sends a PDF to Offline Storage

onOfflineClick(){
  this.fileToBase64("compressed.tracemonkey-pldi-09.pdf", "https://raw.githubusercontent.com/mozilla/pdf.js/ba2edeae/web/compressed.tracemonkey-pldi-09.pdf").then(result => {
  console.log(result);
  b64=String(result);
});
}
}
 
