const axios = require('axios');

const apiUrl = 'https://spoti5.onrender.com/api/heatbeat';
const requestHeaders = {
  'Content-Type': 'application/json',
};

function sendApiRequest() {
  // Sending a POST request with headers and data
  axios.get(apiUrl)
    .then(response => {
      console.log('API Response:', response.data);
    })
    .catch(error => {
      console.error('Error:', error.message);
    });
}

// Set up an interval to send the API request every 5 minutes (300,000 milliseconds)
setInterval(sendApiRequest, 300000);
// sendApiRequest();