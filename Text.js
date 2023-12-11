<<<<<<< HEAD
 //Bold
 function bold() {
    formatDoc("bold");
}
document.getElementById("boldButton").addEventListener("click", bold);
=======
document.addEventListener("DOMContentLoaded", function () {
    const content = document.getElementById("content");

    // Function to execute document commands
    function formatDoc(command, value = null) {
        document.execCommand(command, false, value);
    }











    
});
>>>>>>> 2358dc54ea6bd8d52a786176f86bd4a466148931
