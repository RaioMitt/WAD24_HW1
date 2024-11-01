function myFunction() {
    console.log("Dropdown toggle triggered");
    var element = document.getElementById("dropdownMenu");
    if (element.style.display === "block") {
        element.style.display = "none";
    } else {
        element.style.display = "block";
    }
}