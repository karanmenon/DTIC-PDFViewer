/*
This code uses an event listener to track what keys are pressed in a 2 item array. 
When illegal key combinations are entered, alert appears and keystroke's default response is disabled. 

Features: 
- Disable any "Ctrl + key" command 

Todos:
- Disable right click commands
- disable keystrokes for mac/linux
*/

// 
document.addEventListener('keydown', logKey);
let keys = ["1","2"];
log.textContent = keys;
function logKey(e) {
    keys[0]= keys[1];
    keys[1]=  `${e.code}`;
    log.textContent = keys;

    /*
    Prevents "Ctrl + 'key'" commands on windows
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

    /*
    Prevents "Cmd + Keys" on Mac
    I am not sure if this works yet. Karan will test on his computer.
    */
    if (keys[0].localeCompare("MetaLeft") == 0||keys[0].localeCompare("MetaRight")==0){
        if(keys[1].localeCompare("KeyS")==0){ //Command + S (Save on mac)
            alert("Cmd+S Pressed");
            e.preventDefault();
        }
        if(keys[1].localeCompare("KeyP")==0){ //Command + P (Print on mac)
            alert("Cmd+P Pressed");
            e.preventDefault();
        }
        if(keys[1].localeCompare("KeyC")==0){ //Command + C (Copy on mac)
            alert("Cmd+C Pressed");
            e.preventDefault();
        }
}
}