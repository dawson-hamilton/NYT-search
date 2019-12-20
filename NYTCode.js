function buildQueryUrl() {
    var searchTerm = $("#search-term").val().trim();
    console.log(searchTerm);
    var startYear = $("#start-year").val().trim();
    console.log(startYear);
    var endYear = $("#end-year").val().trim();
    console.log(endYear);
    var apiKey = "rKwNj5dE97ykNAlHp4AO4vsbEFhuAHRc"
    var nytimes = "https://api.nytimes.com/svc/search/v2/articlesearch.json?"
    var url = nytimes + "q=" + searchTerm + "&begin_date=" + startYear + "&end_date" + endYear + "&api-key=" + apiKey;
    console.log(url);
    return url;
}

function clear() {
    $("#article-section").empty();
}

$("#run-search").on("click", function (event) {
    event.preventDefault();

    clear();
    var url = buildQueryUrl();
    console.log(url);

    $.ajax({ URL: url, method: "GET" })
        .then(function (data) {
            console.log(data.response);
        });
});