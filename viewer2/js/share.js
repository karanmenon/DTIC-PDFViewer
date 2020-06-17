/* This contains the functionality for all of the share box 
Features:
-Opens on button click

Todo:
-make better visually
-close

*/

//Function that opens the share box when share button is clicked
function sharePDF(){
    var box = document.getElementById("share-box");
    box.style.visibility = "visible";
}
document.getElementById('share').addEventListener('click', sharePDF);


//Function that closes the share box when x button is clicked
function closeShare(){
    var box = document.getElementById("share-box");
    box.style.visibility = "hidden";
}
document.getElementById('share-close').addEventListener('click', closeShare);