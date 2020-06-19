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
    $("input").val("bye");
}
document.getElementById('share').addEventListener('click', sharePDF);


//Function that closes the share box when x button is clicked
function closeShare(){
    var box = document.getElementById("share-box");
    box.style.visibility = "hidden";
    console.log(sharelink.textcontent);
}
document.getElementById('share-close').addEventListener('click', closeShare);

// Code adapated from https://www.w3schools.com/howto/howto_js_copy_clipboard.asp
function copyLink(){
    var copyText = document.getElementById("sharelink"); //Get link
    copyText.select();
    copyText.setSelectionRange(0,99999); // For mobile devices?
    document.execCommand("copy");   
};