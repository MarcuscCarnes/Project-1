/* 
    Author:         Alex Mallett
    Date:           4/3/2020
    Assignment:     Project 1
    Description:    Functions for toggling restaurant descriptions
*/

var infoOpen = false;

// Closes a restaurant's info
function closeInfo(x) {
    var y = document.getElementById(x);
    y.style.display = "none";
}

// Closes all of the restaurant infos
function closeAllInfo() {
    closeInfo("r1Info");
    closeInfo("r2Info");
    closeInfo("r3Info");
    closeInfo("r4Info");
}

// Shows the first restaurant's info when clicking on it's grid element
function r1() {
    var x = document.getElementById("r1Info");
    if (x.style.display === "none") {
        if(infoOpen == true) {
            closeAllInfo();
        }
        x.style.display = "block";
        infoOpen = true;
    } else {
        x.style.display = "none";
        infoOpen = false;
    }
}

// Shows the second restaurant's info when clicking on it's grid element
function r2() {
    var x = document.getElementById("r2Info");
    if (x.style.display === "none") {
        if(infoOpen == true) {
            closeAllInfo();
        }
        x.style.display = "block";
        infoOpen = true;
    } else {
        x.style.display = "none";
        infoOpen = false;
    }
}

// Shows the third restaurant's info when clicking on it's grid element
function r3() {
    var x = document.getElementById("r3Info");
    if (x.style.display === "none") {
        if(infoOpen == true) {
            closeAllInfo();
        }
        x.style.display = "block";
        infoOpen = true;
    } else {
        x.style.display = "none";
        infoOpen = false;
    }
}

// Shows the fourth restaurant's info when clicking on it's grid element
function r4() {
    var x = document.getElementById("r4Info");
    if (x.style.display === "none") {
        if(infoOpen == true) {
            closeAllInfo();
        }
        x.style.display = "block";
        infoOpen = true;
    } else {
        x.style.display = "none";
        infoOpen = false;
    }
}