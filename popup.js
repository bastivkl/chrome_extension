// Here you can include all the companies you want to chek
const companyList = ["Google, Facebook];

const GIPHY_API_KEY = 'rWnCyayvICBXDT0wgmGj8jsWo8GqNZUy';
const GIPHY_ENDPOINT = `https://api.giphy.com/v1/gifs/random?api_key=${GIPHY_API_KEY}&tag=cat`;

// Make sure jQuery and jQuery UI are loaded
if (!window.jQuery || !window.jQuery.ui) {
  console.error('jQuery and jQuery UI are required for autocomplete.');
}

$(document).ready(function() {
  // Get the input element and add autocomplete
  const companyInput = $('#company');
  companyInput.autocomplete({
    source: companyList,
    select: function(event, ui) {
      checkCompany(ui.item.value);
    }
  });

  // Get the button element and add an event listener
  const checkBtn = document.getElementById('checkBtn');
  checkBtn.addEventListener('click', function() {
    checkCompany(companyInput.val());
  });

  // Get the div element where you want to display the gif
  const gifContainer = document.getElementById('gif-container');
  fetch(GIPHY_ENDPOINT)
    .then(response => response.json())
    .then(data => {
      const gifUrl = data.data.images.original.url;
      // Create an img element
      const gifImg = document.createElement('img');
      gifImg.src = gifUrl;
      gifContainer.appendChild(gifImg);
    })
    .catch(error => console.error(error));
});

function checkCompany(companyInput) {
  const lowercaseInput = companyInput.toLowerCase();
  const lowercaseCompanyList = companyList.map(company => company.toLowerCase());
  if (lowercaseCompanyList.includes(lowercaseInput)) {
    document.getElementById('result').innerHTML = 'The company is in the list';
  } else {
    document.getElementById('result').innerHTML = 'The company is not in the list';
  }
}
