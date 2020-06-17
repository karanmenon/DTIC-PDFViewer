/*This code uses an event listener to track what keys are pressed in a 2 item array. When illegal key combinations
are entered, warnings appear. */
document.addEventListener('keydown', logKey);
let keys = ["1","2"];
log.textContent = keys;
function logKey(e) {
    keys[0]= keys[1];
    keys[1]=  `${e.code}`;
    log.textContent = keys;

    /*Triggers alert when certain key combos are pressed, 
    - you can optionally put a warning here to educate viewers" 
    - If you would like to prevent all "Ctrl +" actions, move e.preventDefault() to after first if statement
    */
    
    if (keys[0].localeCompare("ControlLeft") == 0||keys[0].localeCompare("ControlRight")==0){
        if(keys[1].localeCompare("KeyS")==0){ //Ctrl + S (Save on windows)
            alert("Ctrl+S Pressed");
            e.preventDefault();
        }
        if(keys[1].localeCompare("KeyP")==0){ //Ctrl + P (Print on windows)
            alert("Ctrl+P Pressed");
            e.preventDefault();
        }
        if(keys[1].localeCompare("KeyC")==0){ //Ctrl + C (Copy on Windows)
            alert("Ctrl+C Pressed");
            e.preventDefault();
        }
    }
}