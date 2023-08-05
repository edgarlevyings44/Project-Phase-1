// Function to fetch quotes from the API

  function fetchQuotes() {
    return fetch('https://type.fit/api/quotes')
      .then(response => response.json())
      .then(data => {
        return data;
      })
      .catch(error => {
        console.error('Error fetching quotes:', error);
        return [];
      });
  }

  // Function to display random quotes

function displayRandomQuote(quotes) {
  const randomQuoteIndex = Math.floor(Math.random() * quotes.length);
  const quoteText = document.getElementById('quote-text');
  const quoteAuthor = document.getElementById('quote-author');

  quoteText.textContent = quotes[randomQuoteIndex].text;
  quoteAuthor.textContent = "- " + quotes[randomQuoteIndex].author;
}
