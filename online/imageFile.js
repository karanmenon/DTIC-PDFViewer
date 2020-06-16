// Code adapted from https://hacks.mozilla.org/2012/02/storing-images-and-files-in-indexeddb/

// IndexedDB
window.indexedDB = window.indexedDB || window.webkitIndexedDB || window.mozIndexedDB || window.OIndexedDB || window.msIndexedDB,
    IDBTransaction = window.IDBTransaction || window.webkitIDBTransaction || window.OIDBTransaction || window.msIDBTransaction,
    dbVersion = 1;

//create an request to open the database
var request = indexedDB.open("elephantFiles", dbVersion);
var db;

//if the request goes through successfully
request.onsuccess = function (event) {
    console.log("Success creating/accessing IndexedDB database");
    alert(request.result);
    db = request.result;
    db.onerror = function (event) {
        console.log("Error creating/accessing IndexedDB database");
    }
    db.onsuccess = function(event){ // currently not running this code
        console.log("Successfully created db");
        alert("new db.onsuccess");
    }


    /* This code is depreciated but is usefull for not upgraded browsers.
    Will keep here for now. */
    /*if (db.setVersion) {
        if (db.version != dbVersion) {
            var setVersion = db.setVersion(dbVersion);
            setVersion.onsuccess = function () {
                createObjectStore(db);
                getImageFile();
            };
        }
        else {
            getImageFile();
        }
    }
    else {
        getImageFile();
    } */
}; 

// if you need to upgrade before completing the request
request.onupgradeneeded = function (event) {
    createObjectStore(event.target.result);
};

//if request fails will alert
request.onerror = function (event) {
    alert("request failed", event);
};


// Not called yet because I don't know where to put it.
function openXhr(event){
    //Retrieve image as a blob
    var xhr = new XMLHttpRequest(),
    blob;
    alert("step 1");
    xhr.open("GET", "elephant.jpg", true);
    xhr.responseType = "blob"; //set response type to blob

    xhr.addEventListener("load", function() {
    if(xhr.status === 200){
        console.log("Image recieved");

        blob = xhr.response; // File as response

        putElephantInDb(blob); // Put the recieved blob into IndexedDb
    }
    }, false);

    console.log("Sending xhr...")
    xhr.send();
    
    // Open a transaction to the database
    console.log("transaction occuring...")
    var transaction = db.transaction(["elephants"], IDBTransaction.READ_WRITE);

    // Put the blob into the database
    console.log("file storing...")
    transaction.objectStore("elephants").put(blob, "image");
}

openXhr();






/*function dataFunc() {
    // IndexedDB
    var indexedDB = window.indexedDB || window.webkitIndexedDB || window.mozIndexedDB || window.OIndexedDB || window.msIndexedDB,
        IDBTransaction = window.IDBTransaction || window.webkitIDBTransaction || window.OIDBTransaction || window.msIDBTransaction,
        dbVersion = 1.0;

    // Create/open database
    var request = indexedDB.open("elephantFiles", dbVersion),
        db,
        createObjectStore = function (dataBase) {
            // Create an objectStore
            console.log("Creating objectStore")
            dataBase.createObjectStore("elephants");
        },

        getImageFile = function () {
            // Create XHR
            var xhr = new XMLHttpRequest(),
                blob;

            xhr.open("GET", "elephant.png", true);
            // Set the responseType to blob
            xhr.responseType = "blob";

            xhr.addEventListener("load", function () {
                if (xhr.status === 200) {
                    console.log("Image retrieved");  

                    // Blob as response
                    blob = xhr.response;
                    console.log("Blob:" + blob);

                    // Put the received blob into IndexedDB
                    putElephantInDb(blob);
                }
            }, false);
            // Send XHR
            xhr.send();
        },

        putElephantInDb = function (blob) {
            console.log("Putting elephants in IndexedDB");
            // Open a transaction to the database
            var transaction = db.transaction(["elephants"], IDBTransaction.READ_WRITE);

            // Put the blob into the dabase
            var put = transaction.objectStore("elephants").put(blob, "image");

            // Retrieve the file that was just stored
            transaction.objectStore("elephants").get("image").onsuccess = function (event) {
                var imgFile = event.target.result;
                console.log("Got elephant!" + imgFile);

                // Get window.URL object
                var URL = window.URL || window.webkitURL;

                // Create and revoke ObjectURL
                var imgURL = URL.createObjectURL(imgFile);

                // Set img src to ObjectURL
                var imgElephant = document.getElementById("elephant");
                imgElephant.setAttribute("src", imgURL);

                // Revoking ObjectURL
                URL.revokeObjectURL(imgURL);
            };
        };

        db.onerror = function (event) {
            console.log("Error creating/accessing IndexedDB database");
        };
        /*
        // Interim solution for Google Chrome to create an objectStore. Will be deprecated
        if (db.setVersion) {
            if (db.version != dbVersion) {
                var setVersion = db.setVersion(dbVersion);
                setVersion.onsuccess = function () {
                    createObjectStore(db);
                    getImageFile();
                };
            }
            else {
                getImageFile();
            }
        }
        else {
            getImageFile();
        } 

    // For future use. Currently only in latest Firefox versions
    request.onupgradeneeded = function (event) {

        createObjectStore(event.target.result);

    };
};

dataFunc(); */