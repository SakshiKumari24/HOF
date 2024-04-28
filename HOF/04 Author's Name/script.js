
var books = [
    { title: "Book 1", author: "author 1", publicationYear: 2008 },
    { title: "Book 2", author: "author 2", publicationYear: 2012 },
    { title: "Book 3", author: "author 3", publicationYear: 2005 },
    { title: "Book 4", author: "author 4", publicationYear: 2015 },
];
function capitalize(str) {
    return str.replace(/\b\w/g, function(char) {
        return char.toUpperCase();
    });
}
var filteredBooks = books.filter(function(book) {
    return book.publicationYear >= 2010;
}).map(function(book) {
    return {
        title: book.title,
        author: capitalize(book.author),
        publicationYear: book.publicationYear
    };
});
console.log("Filtered books:", filteredBooks);
