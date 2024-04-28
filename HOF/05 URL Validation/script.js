function isValidURL(url) {
    const regex = /^(ftp|http|https):\/\/[^ "]+$/;

    const isValid = regex.test(url);

    if (isValid) {
        console.log("The provided URL is valid.");
    } else {
        console.log("The provided URL does not meet the criteria.");
    }
}
const inputURL = "https://www.example.com";
isValidURL(inputURL); 
