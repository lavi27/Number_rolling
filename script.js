function num_roll(count, num) {
    var target = document.getElementById("roll_" + count);
    var childcount = target.childElementCount;
    if(num.toString().length > childcount) {
        for (var i=0; i<num.toString().length - childcount; i++) {
            var content = "<div class='number' style='bottom:0px'>";
            for (var l=0; l<10; l++) {
                content += "<a>" + l + "</a>";
            }
            content += "</div>";
            target.innerHTML += content;
        }
    } else if(num.toString().length < childcount) {
        for(var i=0; i < childcount - num.toString().length; i++) {
            document.getElementsByClassName("number")[target.childElementCount-1].remove();
        }
    }
    target.style.height = document.getElementsByClassName("number")[0].clientHeight/10 + "px";
    target.style.width = document.getElementsByClassName("number")[0].clientWidth*num.toString().length + "px";
    for (var i=0; i<num.toString().length; i++) {
        var pos = Number(num.toString().split('')[i]) * (document.getElementsByClassName("number")[0].clientHeight/10);
        document.getElementsByClassName("number")[i].style = "bottom:" + pos + "px";
    }
}

function random_num() {
    num_roll(1, Math.floor(Math.random() * 10000000000));
}

window.addEventListener('DOMContentLoaded', function() {
    num_roll(1, "0123456789");
    
    var textarea = document.querySelector("textarea");
    textarea.addEventListener('input', function(event) {
    if(event.inputType == "insertLineBreak") {
        num_roll(1, textarea.value.toString().trim());
        textarea.value = "";
    }
});
});