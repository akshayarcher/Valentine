var count = 0;
document.getElementById("no").onclick = function () {
    count = count + 1;
    move(count)

}
function left() {
    document.getElementById("no").style.position = "relative";
    document.getElementById("no").style.left = "150px";
}
function left1() {
    document.getElementById("no").style.left = "0px";
}
function top1() {
    document.getElementById("no").style.top = "150px";
}
function top2() {
    document.getElementById("no").style.top = "0px";
}
function right1() {
    document.getElementById("no").style.marginBottom = "150px";
}
function right2() {
    document.getElementById("no").style.marginBottom = "0px";
}
function bottom1() {
    document.getElementById("no").style.marginRight = "150px";
}
function bottom2() {
    document.getElementById("no").style.marginRight = "0px";
}

function move(count) {
    if (count == 1) {

        left()
    }
    if (count == 2) {

        left1()
    }
    if (count == 3) {

        top1()
    }
    if (count == 4) {

        top2()
    }
    if (count == 5) {

        right1()
    }
    if (count == 6) {

        right2()
    } 
    if (count == 7) {

        bottom1()
    }
    if (count == 8) {

        bottom2()
    }
    if (count == 9) {

        left()
    }
    if (count == 10) {

        left1()
    }
    if (count == 11) {

        bottom1()
    }
    if (count == 12) {

        bottom2()
    }
    if (count == 13) {

     top1()
    }
    if (count == 14) {
        top2()
    }
    if (count == 15) {

        right1()
    }
    if (count == 16) {

        right2()
    } 
    if (count == 17) {

        bottom1()
    }
    if (count == 18) {

        bottom2()
    }
    if (count == 19) {

        left()
    }
    if (count == 20) {

        left1()
    }
    if (count == 21) {

        bottom1()
    }
    if (count == 22) {

        bottom2()
    }
    if (count == 23) {

     top1()
    }
    if (count == 24) {
        top2()
    }
    if(count == 25) {
        alert("Yes kr gapchup ");
    }
}