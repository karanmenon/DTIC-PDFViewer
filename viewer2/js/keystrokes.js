/*
This code uses an event listener to track what keys are pressed in a 2 item array. 
When illegal key combinations are entered, alert appears and keystroke's default response is disabled. 

Features: 
- Disable any "Ctrl + key" command 
- Disabled right click

Todos:
- Disable screenshots

Windows Screenshot Keystrokes
- PrtScn, Alt+PrtScn, Window's+ PrtScn
- Window's+Shift+S

*/

// 
document.addEventListener('keydown', logKey);
let keys = ["0","1","2"];
log.textContent = keys;
function logKey(e) {
    keys[0]=keys[1];
    keys[1]= keys[2];
    keys[2]= `${e.code}`;
    log.textContent = keys;

    /*
    Prevents "Ctrl + 'key'" commands on windows
    */
    if (keys[1].localeCompare("ControlLeft") == 0||keys[1].localeCompare("ControlRight")==0){
        if(keys[2].localeCompare("KeyS")==0){ //Ctrl + S (Save on windows)
            alert("Ctrl+S Pressed");
            e.preventDefault();
        }
        if(keys[2].localeCompare("KeyP")==0){ //Ctrl + P (Print on windows)
            alert("Ctrl+P Pressed");
            e.preventDefault();
        }
        if(keys[2].localeCompare("KeyC")==0){ //Ctrl + C (Copy on Windows)
            alert("Ctrl+C Pressed");
            e.preventDefault();
        }
        if(keys[2].localeCompare("KeyA")==0){ //Ctrl + A (Copy All on Windows)
            alert("Ctrl+A Pressed");
            e.preventDefault();
        }
    }

    /*
    Prevents "Cmd + Keys" on Mac
    I am not sure if this works yet. Karan will test on his computer.
    */
    if (keys[1].localeCompare("MetaLeft") == 0||keys[1].localeCompare("MetaRight")==0){
        if(keys[2].localeCompare("KeyS")==0){ //Command + S (Save on mac)
            alert("Cmd+S Pressed");
            e.preventDefault();
        }
        if(keys[2].localeCompare("KeyP")==0){ //Command + P (Print on mac)
            alert("Cmd+P Pressed");
            e.preventDefault();
        }
        if(keys[2].localeCompare("KeyC")==0){ //Command + C (Copy on mac)
            alert("Cmd+C Pressed");
            e.preventDefault();
        }
        if(keys[2].localeCompare("KeyA")==0){ //Command + A (Copy All on mac)
            alert("Cmd+A Pressed");
            e.preventDefault();
        }
    }

    if (keys[0].localeCompare("MetaLeft") == 0||keys[0].localeCompare("MetaRight")==0){
        if(keys[1].localeCompare("ShiftLeft")==0||keys[1].localeCompare("ShiftRight")==0){
            if (keys[2].localeCompare("Digit4")==0){
                alert("Cmd + Shift + 4 Pressed"); //Disables a screenshot on mac
                e.preventDefault();
            }
            if (keys[2].localeCompare("KeyS")==0){
                alert("Cmd + Shift + S Pressed"); //Disables a screenshot on windows
                e.preventDefault();
            }
        }
    }
}
document.addEventListener('contextmenu', event => event.preventDefault()); // Disables right click


