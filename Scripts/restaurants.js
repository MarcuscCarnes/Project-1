var infoOpen = false;

function closeInfo(x) {
    var y = document.getElementById(x);
    y.style.display = "none";
}

function closeAllInfo() {
    closeInfo("r1Info");
    closeInfo("r2Info");
    closeInfo("r3Info");
    closeInfo("r4Info");
}

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