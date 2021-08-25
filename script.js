var roll = document.getElementsByClassName("roll");
function num_roll(count, num) {
    for (var i=0; i<num.toString().length; i++) {
        document.getElementById(count).innerHTML += "<div>";
        for (var l=0; l<10; l++) {
            document.getElementById(count).innerHTML += "<i>" + l + "</i>";
        }
        document.getElementById(count).innerHTML += "</div>";
    }
}

window.addEventListener('DOMContentLoaded', function() {
    num_roll(1, 0123456789);
});