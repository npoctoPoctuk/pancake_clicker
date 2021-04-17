var count = 0
var count_number = document.getElementById("count_js");
var button = document.getElementById("button_js");
button.onclick = function () {

    count += 1
    count_number.innerText = count
};