
const reviewData = []; 
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
  // Function to like and dislike
  
  let numLikes = 0;
  let numDislikes = 0;
  const likeButton = document.getElementById('like-button');
  const dislikeButton = document.getElementById('dislike-button');
  const likeCount = document.getElementById('like-count');
  const dislikeCount = document.getElementById('dislike-count');


  likeButton.addEventListener('click', () => {
      numLikes++;
      likeButton.classList.add('liked');
      likeCount.textContent = numLikes;
  });

  dislikeButton.addEventListener('click', () => {
      numDislikes++;
      dislikeButton.classList.add('disliked');
      dislikeCount.textContent = numDislikes;
  });

}
displayRandomQuote(fetchQuotes());

//Function to display reviews
function displayReviews(review) {
  const reviewContainer = document.getElementById('review-list');
  reviewContainer.innerHTML = '';

  const ul = document.createElement('ul');

  review.forEach(review => {
    const li = document.createElement('li');
    li.textContent = review.name + ': ' + review.comment;
    ul.appendChild(li);
  });
  reviewContainer.appendChild(ul);
}
// Event listener for the review form

document.getElementById('review-form').addEventListener('submit', (e) => {
  e.preventDefault();
  const name = document.getElementById('name').value;
  const comment = document.getElementById('comment').value;

  // Push to the reviewData array
  reviewData.push({name, comment});

    // Clear the form
  document.getElementById('name').value = '';
  document.getElementById('comment').value = '';

  displayReviews(reviewData);
});

fetchQuotes().then(quotes => {
  displayRandomQuote(quotes);
});
displayReviews(reviewData);

