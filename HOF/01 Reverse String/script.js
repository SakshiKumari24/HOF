
function reverseString(str) {
    return str.split('').reverse().join('');
}
var input = "Hello, world!";
function reverseAfterDelay(input) {
    setTimeout(function() {
        var reversed = reverseString(input);
        console.log("Reversed string:", reversed);
    }, 2000);
}
reverseAfterDelay(input);
