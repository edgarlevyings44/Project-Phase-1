// Function to fetch quotes from the API

  function fetchQuotes() {
    return fetch('https://type.fit/api/quotes')
      .then(response => response.json())
      .then(data => {
        return data;
      })
      .then(quotes => {
        displayRandomQuote(quotes);
      })
      .catch(error => {
        console.error('Error fetching quotes:', error);
        return [];
      });
  }

  // Function to display random quotes

function displayRandomQuote(quotes) {
    
  const quoteText = document.getElementById('quote-text');
  const quoteAuthor = document.getElementById('quote-author');
  const getQuoteButton = document.getElementById('get-quote-button');

getQuoteButton.addEventListener('click', () => {
    const randomQuoteIndex = Math.floor(Math.random() * quotes.length);
    quoteText.textContent = quotes[randomQuoteIndex].text;
    quoteAuthor.textContent = "- " + quotes[randomQuoteIndex].author;
})
  
  
  let numLikes = 0;
  let numDislikes = 0;
  const likeButton = document.getElementById('like-button');
  const dislikeButton = document.getElementById('dislike-button');

  likeButton.addEventListener('click', () => {
      numLikes++;
      likeButton.classList.add('liked');
  });

  dislikeButton.addEventListener('click', () => {
      numDislikes++;
      dislikeButton.classList.add('disliked');
  });

}
displayRandomQuote(fetchQuotes());

