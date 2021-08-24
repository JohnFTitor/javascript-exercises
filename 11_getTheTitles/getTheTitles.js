const getTheTitles = function(library) {
    return library.map(function (book) {
        return book["title"];
    })
};

module.exports = getTheTitles;
