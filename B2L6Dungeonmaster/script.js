const rollme = document.getElementById("button");
const stats = document.getElementById("stat")

function diceRoll(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

function removeSmallest(arr) {
    var min = Math.min(...arr);
    return arr.filter(e => e != min);
}

function getStatFromRoll() {
var rollSet1 = new Array();
    rollSet1[0] = diceRoll(1, 6);
    rollSet1[1] = diceRoll(1, 6);
    rollSet1[2] = diceRoll(1, 6);
    rollSet1[3] = diceRoll(1, 6);
    var setsmall = (Math.min(...rollSet1));
    return (rollSet1[0] + rollSet1[1] + rollSet1[2] + rollSet1[3] - setsmall);
}

rollme.addEventListener('click', () => {
    stats.innerHTML = getStatFromRoll();
})
