import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-my-dialog',
  templateUrl: './my-dialog.component.html',
  styleUrls: ['./my-dialog.component.css']
})
export class MyDialogComponent {

  modalTitle: string;
  url: string;
  constructor(@Inject(MAT_DIALOG_DATA) public data: any) {
    this.modalTitle = data.title;
    this.url = window.location.href;
  }

  /**
   * @description Allows the user to send Outlook emails from the pdf viewer through their personal email. By editing the url variable you can change the subject and the body message.
   * @var link is the url at the top of the page
   * @var url is the link that is opened when the Outlook button is clicked, leads to the user's composition box
   */
  shareOutlook(){
    var link = window.location.href;
    let url = 'https://outlook.office.com/?path=/mail/action/compose&to=to_address&subject=subject&body=' + link;
    window.open(url, 'sharer', 'toolbar=0,status=0,width=648,height=395');
  }

  /**
   * @description Allows the user to send gmail emails from the pdf viewer through their personal email. By editing the url variable you can change the subject and the body message.
   * @var link is the url at the top of the page
   * @var url is the link that is opened when the gmail button is clicked, leads to the user's composition box
   */
  shareGmail(){
    var link = window.location.href;
    let url = 'https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=&su=Your+Subject+here&body='+"Check out this PDF: " + link +'&ui=2&tf=1&pli=1';
    window.open(url, 'sharer', 'toolbar=0,status=0,width=648,height=395');
  }

  /**
   * @description Allows the user to send yahoo emails from the pdf viewer through their personal email. By editing the url variable you can change the subject and the body message.
   * @var link is the url at the top of the page
   * @var url is the link that is opened when the yahoo button is clicked, leads to the user's composition box
   */
  shareYahoo(){
    var link = window.location.href;
    let url = 'https://compose.mail.yahoo.com/?to=to_address&subject=subject&body=' + link;
    window.open(url, 'sharer', 'toolbar=0,status=0,width=648,height=395');
  }

  /**
   * @description allows user to share the link to the pdf through their computer's built in mail app
   * @var the href located at the top of the browser
   * @url the url that opens the user chosen mail app
   */
  shareEmail(){
    var link = window.location.href;
    let url = "mailto:?Subject=SubjectHere&body=" + link;
    window.open(url, 'sharer', 'toolbar=0,status=0,width=648,height=395');
  }

  /**
   * @description Allows the user to copy the pdf's link and highlights the link as well. 
   * @var copyText gets the text that is in the input box with the ID "sharelink". Need to be a HTMLInputElement so we can use the select function on it.
   */
  copyLink(){
    /* Get the text field */
    var copyText = document.getElementById("sharelink") as HTMLInputElement;

    /* Select the text field */
    copyText.select();
    copyText.setSelectionRange(0, 99999); /*For mobile devices*/

    /* Copy the text inside the text field */
    document.execCommand("copy");
    }
}
