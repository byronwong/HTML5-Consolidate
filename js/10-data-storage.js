"use strict";

// Data storage 

// changed localStorage --> localStorage

// window.localStorage - stores data with no expiration date
// window.sessionStorage - stores data for one session (data is lost when the tab is closed)

function initiate() {

    // Find elements
    var saveButton = document.getElementById("save");
    var retrieveButton = document.getElementById("retrieve");
    var deleteButton = document.getElementById("delete");
    var reviewButton = document.getElementById("review");
    var clearButton = document.getElementById("clear");
    
    // bind events to elements in this case the buttons
    saveButton.addEventListener("click", saveItem);
    retrieveButton.addEventListener("click", retrieveItem);
    deleteButton.addEventListener("click", deleteItem);
    reviewButton.addEventListener("click", reviewAll);
    clearButton.addEventListener("click", clearAll);

    // adds event listener to storage event
    addEventListener("storage", storageReview);
};


function saveItem() {
    var key = document.getElementById("key").value;
    var value = document.getElementById("value").value;

    // save data into session storage
    localStorage[key] = value;
    console.log("data saved");

    // Alternative 
    // localStorage.setItem("key", "value");

}

function retrieveItem() {
    var data = document.getElementById("data");
    var key = document.getElementById("key").value;
    var value = localStorage[key];
    console.log(key);
    data.innerHTML = "<div>" + key + ": " + value + " </div>";

    // Alternative 
    // localStorage.getItem("key");
}


function deleteItem() {
    if (confirm("delete?")) {
        var key = document.getElementById("key").value;
        localStorage.removeItem(key);
        data.innerHTML = "<div> deleted. </div>";
    }
}


function reviewAll() {
    console.log("clicked");
    // var data = document.getElementById("data");

    for (var i = 0; i < localStorage.length; i++) {
        var key = localStorage.key(i);
        var value = localStorage.getItem(key);
        data.innerHTML += "<div>" + key + " : " + value + "<br></div>";
    }

}

function clearAll() {
    if (confirm("Clear?")) {
        localStorage.clear();
        data.innerHTML = "<div> Cleared! </div>";
    }
}

function storageReview(e) {
    data.innerHTML += "<div>" +
        "key: " + e.key + "<br>" +
        "old value: " + e.oldValue + "<br>" +
        "new value: " + e.newValue + "<br>" +
        "url: " + e.url + "<br>" +
        "storage area: " + e.storageArea + "<br></div>";
}

addEventListener("load", initiate);

// NOTES: localStorage()
/*
ref: http://davidwalsh.name/html5-storage

ADD Item
localStorage.setItem('someKey','someValue');
localStorage.someKey = 'someValue'; - (shorthand method)

GET Item
localStorage.getItem('someKey'); //returns 'someValue'
localStorage.someKey; //returns 'someValue' (reference)

Remove Key
localStorage.removeItem('someKey'); //returns 'undefined' for someKey
*/