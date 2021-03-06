
// Get quote from Random Famous Quotes API and display it
function getQuote() {
  $.ajax({
    headers: {
      "X-Mashape-Key": "dz36B0ggeEmshiNarjwMLQy5EVPCp1YcNc1jsnsDfeSpXOSRd6",
      Accept: "application/json", 
      "Content-Type": "application/x-www-form-urlencoded"
    },
    url: 'https://andruxnet-random-famous-quotes.p.mashape.com/cat=',
    success: function(data) {
      var quote = data.quote;
      var author = data.author;
      $("#text").html('"' + quote + '"');
      $("#author").html(author);
      $("#tweet").attr('href', 'https://twitter.com/intent/tweet?related=freecodecamp&hashtags=awesomequote&text=' + encodeURIComponent('"' + quote + '" - ' + author));
    }
  });
}

// Get initial quote and listen for new quote request
$(document).ready(function() {
  getQuote();
  $("#new-quote").on('click', getQuote);
});