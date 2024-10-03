function arthimetic(arg) {
    let x = document.getElementById("pod").value;
    let y = document.getElementById("pop").value;
    let result = document.getElementById("pid");
    if (arg === 'add') {
        result.value = Number(x) + Number(y);
    } else if (arg === 'sub') {
        result.value = Number(x) - Number(y);
    } else if (arg === 'mul') {
        result.value = Number(x) * Number(y);
    } else if (arg === 'div') {
        result.value = Number(x) / Number(y);
    } else if (arg === 'con') {
        result.value = (x > y) ? "true" : "false";
    } else if (x == "" && y == "") {
        alert('no empty fields allowed');
    }

}
// function myfunction1(){
//     alert('page is loading');
//  }
function check() {
    let x=document.getElementById('pod').value;
    let y=document.getElementById('pop').value;
    if (x < 0 && y < 0) {
        alert("no negative fields allowed");
    }
}