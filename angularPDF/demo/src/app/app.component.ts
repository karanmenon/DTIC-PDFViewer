import { Component, HostListener } from '@angular/core';
import { HttpClient } from '@angular/common/http'; // used for pdf viewing
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { MyDialogComponent } from './my-dialog/my-dialog.component';
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
  constructor(private http:HttpClient, public dialog: MatDialog ){}

  pdfSrc='https://raw.githubusercontent.com/mozilla/pdf.js/ba2edeae/web/compressed.tracemonkey-pldi-09.pdf'   //url of the pdf
  rotation = 0; // the angle of rotation, init position is 0
  zoom = 1.0; // the degree of zoom, default degree is 0
  showAll= true;
  page = 1;
  keystroke = ["1", "2"];
  totalPages = 0;
  
  afterLoadComplete(pdf): void {
    this.totalPages = pdf.numPages;
  }

  /**
   * @description Opens the share box (used when share button is clicked)
   */
  openModal() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.data = {
    id: 1,
    title: 'Share'
    };
    const dialogRef = this.dialog.open(MyDialogComponent, dialogConfig);
    dialogRef.disableClose = false;
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
   * This is the funtion the turns off keystrokes
   * Currently only turns off Ctrl + p, Ctrl + C, and Ctrl + S
   * @param event This key that is input by the keyboard registers as a keyboard event
   */
  @HostListener('document:keydown', ['$event'])
  handleKeyboardEvent(event: KeyboardEvent) {
    console.log(event);
    this.keystroke[0] = this.keystroke[1];
    this.keystroke[1] = event.key;
    if (this.keystroke[0] == "Control" && this.keystroke[1] == "p"){
      event.preventDefault();
    }
    if (this.keystroke[0] == "Control" && this.keystroke[1] == "c"){
      event.preventDefault();
    }
    if (this.keystroke[0] == "Control" && this.keystroke[1] == "s"){
      event.preventDefault();
    }
  }

  /**
   * This Function disables right click only contact class div (where the PDF is)
   * @param event 
   */
  onRightClick(event) {
    event.preventDefault();
  }

  /**
   * In single page view, this changes the pages, inputing a negative
   * number will decrement the page
   * @param number this is how many pages you would like to increase the current page count by
   */
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




 
