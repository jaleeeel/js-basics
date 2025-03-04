const name1Txt = document.getElementById("name1");
const name2Txt = document.getElementById("name2");
const name3Txt = document.getElementById("name3");
const resultTxt = document.getElementById("sum");

function fullname() {
    resultTxt.innerHTML = name1Txt.value + " " + name2Txt.value + " " + name3Txt.value;
}

function clearEntries() {
    name1Txt.value = "";
    name2Txt.value = "";
    name3Txt.value = "";
    resultTxt.innerHTML = "";
}