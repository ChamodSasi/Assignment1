
 function bold() {
    formatDoc("bold");
}
document.getElementById("boldButton").addEventListener("click", bold);

 //Underline
 function underline() {
    formatDoc("underline");
}
document.getElementById("underlineButton").addEventListener("click", underline);

 //Italic
 function italic() {
    formatDoc("italic");
}
document.getElementById("italicButton").addEventListener("click", italic);

 //Justify Left
 function justifyLeft() {
    formatDoc("justifyLeft");
}
document.getElementById("justifyLeftButton").addEventListener("click", justifyLeft);


//justify Center
function justifyCenter() {
    formatDoc("justifyCenter");
}
document.getElementById("justifyCenterButton").addEventListener("click", justifyCenter);


//justify Right
function justifyRight() {
    formatDoc("justifyRight");
}
document.getElementById("justifyRightButton").addEventListener("click", justifyRight);


//justify Full
function justifyFull() {
    formatDoc("justifyFull");
}
document.getElementById("justifyFullButton").addEventListener("click", justifyFull);


 //Color Change
 function openColorPicker() {
    // Create a color input element
    const colorInput = document.createElement("input");
    colorInput.type = "color";

    colorInput.addEventListener("input", function () {
        formatDoc("foreColor", colorInput.value);
    });

    colorInput.click();
}
document.getElementById("colorButton").addEventListener("click", openColorPicker);








    

