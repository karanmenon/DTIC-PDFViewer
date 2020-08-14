# PDF Viewer and Offline Database
This project was made to help promote safe document sharing by storing the documents in the user's browser. 
This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 10.0.1.

## Requirements
* Angular 10+
* Node: 12.18.0

### Required Dependencies
* @angular/cdk                      10.1.2
* @angular/cli                      10.0.1
* @angular/material                 10.1.2
* @ngtools/webpack                  10.0.1
* @schematics/angular               10.0.1
* @schematics/update                0.1000.1
* rxjs                              6.5.5
* typescript                        3.9.6
* webpack                           4.43.0
* @angular/animations               10.0.2
* @angular/common                   10.0.2
* @angular/compiler                 10.0.2
* @angular/compiler-cli             10.0.2
* @angular/core                     10.0.2
* @angular/forms 10.0.2
* @angular/material 10.1.2
* @angular/platform-browser 10.0.2
* @angular/platform-browser-dynamic 10.0.2
* @angular/router 10.0.2
* @types/jasmine 3.5.11
* @types/jasminewd2 2.0.8
* @types/node 12.12.47
* angular 1.8.0
* codelyzer 6.0.0
* ng-inline-svg 10.1.0
* ng2-pdf-viewer 6.3.2
* ngx-indexed-db 5.0.5
* rxjs 6.5.5
* save 2.4.0
* ts-node 8.3.0
* tslib 2.0.0
* tslint 6.1.2
* typescript 3.9.6
* zone.js 0.10.3


### Testing Dependencies
* @angular-devkit/architect         0.1000.1
* @angular-devkit/build-angular     0.1000.1
* @angular-devkit/build-optimizer   0.1000.1
* @angular-devkit/build-webpack     0.1000.1
* @angular-devkit/core              10.0.1
* @angular-devkit/schematics        10.0.1
* karma 5.0.9
* karma-chrome-launcher 3.1.0
* karma-coverage-istanbul-reporter 3.0.3
* karma-jasmine 3.3.1
* karma-jasmine-html-reporter 1.5.4
* jasmine-core 3.5.0
* jasmine-spec-reporter 5.0.2
* protractor 7.0.0


## Features
* Icons taken from FontAwesome

### Pdf viewer Features
* Developed using ng2-pdf-viewer
* Toolbar
    * Rotate Feature Counter Clockwise and Clockwise 90 degrees
    * Zoom In and Out 
    * Toggle Pages - User can choose between viewing one page or viewing the whole pdf
    * Previous Page - Only visible when in single page view
    * Page number -  Only visible in single page view, shows the user that they are on _ out of _ pages
    * Next Page - Only visible in single page view
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

### Share Box Features
* Created using a MatDialog Component
* Quick Copy button
* Click outside the box to close it

### Offline Database Features
* ngx-indexed-db library to use indexed-db with Angular
* Base-64 encoding to store the PDF
* Accessible by Offline Mode button in PDF Viewer
* Stores PDFs within the browser using IndexedDB, relies on concept of Object Storage
* Can be accessed offline
* PDFs converted to Base64 format for better storage
* Can see all the files that have been added, with an option to open or delete



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


## Future Development Plans
### Pdf Viewer
* Annotation Features - We will potentially a PDF viewer's SDK, see market research document for information about the different PDF viewer companies
    * Right click to open annotation feature
    * Draw tool
    * Comment box
* Organization of toolbar to utilize the header space or transition to a vertical toolbar
* Allow user to input page number in single page mode
* First and Last page button
* A Search bar for certain words in the pdf
### Offline Database
* Add folder feature to reorganize files

## License
[MIT](https://opensource.org/licenses/MIT)

## Authors and acknowledgments
This project was created by Danielle Zevitz and Karan Menon for DTIC during the Summer 2020 X-force fellowship program.