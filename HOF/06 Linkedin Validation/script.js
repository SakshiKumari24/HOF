
var linkedinPattern = /^https:\/\/www\.linkedin\.com\/in\/[a-zA-Z0-9_-]{5,30}[a-zA-Z0-9]$/;
function isValidLinkedInURL(input) {
    return linkedinPattern.test(input);
}
var testURLs = [
    "https://www.linkedin.com/in/johndoe123",
    "https://www.linkedin.com/in/jane-smith",
    "https://www.linkedin.com/in/john_doe-123",
    "https://www.linkedin.com/in/alex-2022",
    "https://www.linkedin.com/in/steve_456",
    "https://www.linkedin.com/in/sarah",
    "https://www.linkedin.com/in/mary1234567890123456789012345",
    "https://www.linkedin.com/johndoe123",
    "https://www.linkedin.com/in/john!doe",
    "https://www.linkedin.com/in/",
];
testURLs.forEach(function(url) {
    if (isValidLinkedInURL(url)) {
        console.log(url, "is a valid LinkedIn profile URL.");
    } else {
        console.log(url, "is not a valid LinkedIn profile URL.");
    }
});
