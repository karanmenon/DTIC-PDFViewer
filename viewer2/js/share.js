/* This contains the functionality for all of the share box 
Features:
- Opens/closes on button click


Todo:
- make better visually
- grab link from window.location.href
- link with outlook for easy share
*/

//Function that opens the share box when share button is clicked
function sharePDF(){
    var box = document.getElementById("share-box");
    box.style.visibility = "visible";
    console.log(sharelink.textcontent);
    sharelink.textcontent = "Share link: ";
    console.log(sharelink.textcontent);
}
document.getElementById('share').addEventListener('click', sharePDF);


//Function that closes the share box when x button is clicked
function closeShare(){
    var box = document.getElementById("share-box");
    box.style.visibility = "hidden";
    console.log(sharelink.textcontent);
}
document.getElementById('share-close').addEventListener('click', closeShare);