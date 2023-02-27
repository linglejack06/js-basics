function add7(number) {
    return number + 7;
}
console.log("add7: " + add7(8));
function multiply (n1, n2) {
    return n1 * n2;
}
console.log("multipy: " + multiply(7, 14));
function capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}
console.log("Capitalize: " + capitalize("jack"));
function lastLetter(str) {
    return str.charAt(str.length - 1);
}
console.log("Last Letter: " + lastLetter("jack"))