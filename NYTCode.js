var queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?q=election&api-key={{NYTkey}}"

$.ajax({ URL: queryURL, method: "GET" })
    .then(function (data) {
        console.log(data.response);
    });

$("#run-search").on("click", function () {
    var searchTerm = $("#search-term").val().trim();
    var startYear = $("#start-year").val().trim();
    var endYear = $("#end-year").val().trim();
    console.log(searchTerm);
    console.log(startYear);
    console.log(endYear);
});

