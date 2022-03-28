menu.onclick = function myFunction() {
    var x = document.getElementById("myTopnav");

    if(x.className === "topnav") {
        x.className += " responsive";
    } else{
        x.className = "topnav";
    }
}



function copyText() {
navigator.clipboard.writeText('5168 7456 0635 2760').then(function () {
    alert('It worked! Do a CTRL - V to paste')
}, function () {
    alert('Failure to copy. Check permissions for clipboard')
});
}