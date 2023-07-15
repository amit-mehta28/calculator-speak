function clearScreen() {
    document.getElementById("result").value = "";
}
 
function display(value) {
    let utterance = new window.SpeechSynthesisUtterance(value);
    speechSynthesis.speak(utterance);
    document.getElementById("result").value += value;
}
 
function calculate() {
    var p = document.getElementById("result").value;
    var q = eval(p);
    document.getElementById("result").value = q;
    let utterance = new window.SpeechSynthesisUtterance(q);
    speechSynthesis.speak(utterance);
}

