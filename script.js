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
  