# PDF Viewer and Offline Database
This project was made to help promote safe document sharing by storing the documents in the user's browser. 
This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 10.0.1.

## Requirements
* Angular 10+

## Features
### Pdf viewer
* Toolbar
    * Rotate Feature Counter Clockwise and Clockwise 90 degrees
    * Zoom In and Out 
    * Toggle Pages - User can choose between viewing one page or viewing the whole pdf
    * Previous Page - Only visible when in single page view
    * Page number -  Only visible in single page view, shows the user that they are on _ out of _ pages
    * Next Page - Only visble in single page view
    * Share - Opens up matdialog box with share options
    * Save to Offline Mode - converts text to Base-64 and saves it to the indexedDB database
* Right click disabled
    * Only disabled over the pdf, if the User clicks in the background or on the toolbar they will be able to right click.
* Keystrokes disabled
    * Currently disabled keys
        * Ctrl + C = Copy on Windows
        * Ctrl + S = Save on Windows
        * Ctrl + P = Print on Windows
    * To disable new keystroke, copy code for other keystroke disabler and replace with new key's code

### Share box
* Quick Copy button
* Click outside the box to close it
### Offline Database


## Usage
To view the project at its current stage, download the document and put it in an accessable folder. 
To run the project:
 1. Open Command Prompt
 2. cd to the location where you saved the project
 3. Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.
 4. Use `npm install` to install all npm files needed to run the project.


## Installation in a Website
This project comes with 3 Angular components: app.component(pdf viewer), my-dialog component(share box), and indexeddb (Offline Database). The components can easily be transfered into a website using the Angular framework by ... 

## Bugs
* Keystroke Disabler 
    * if Ctrl + A + P is pressed user will still be able to print because it only compared the last two keys pressed


## Running unit tests
Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests
Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Support
Feel free to contact Danielle Zevitz (dez8dc@virginia.edu) or Karan Menon (krmenon@usc.edu) with any questions on the documentation or project.


## Roadmap

## Authors and acknowledgments
This project was created by Danielle Zevitz and Karan Menon for DTIC during the Summer 2020 X-force fellowship program.