# PDF Viewer and Offline Database
This project was made to help promote safe document sharing by storing the documents in the user's browser. 
This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 10.0.1.

## Requirements
* Angular 10+

## Features
### Pdf viewer
* Toolbar
    * Rotate Feature
    * Zoom
    * Toggle Pages
    * Share
    * Offline Mode
* Right click disabled (only over pdf itself)
* Keystrokes that are disabled currently
    * Ctrl + C = Copy on Windows
    * Ctrl + S = Save on Windows
    * Ctrl + P = Print on Windows
    * To disable new keystroke, copy code for other keystroke disabler and replace with new key code
    * Downside of keystroke disabler is if Ctrl + A + P is pressed user will still be able to print because it only compared the last two keys pressed
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

## Running unit tests
Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests
Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Support


## Roadmap

## Authors and acknowledgments
This project was created by Danielle Zevitz and Karan Menon for DTIC during the Summer 2020 X-force fellowship program.