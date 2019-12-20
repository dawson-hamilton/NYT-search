var queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?q=" + articleSearch + "&api-key=rKwNj5dE97ykNAlHp4AO4vsbEFhuAHRc"

$.ajax({ URL: queryURL, method: "GET" })
    .then(function (response) {

    });