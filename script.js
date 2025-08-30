// script.js
function displayResults(pros) {
  const resultsContainer = document.getElementById('results');
  resultsContainer.innerHTML = ''; // Clear previous results

  if (pros.length === 0) {
    resultsContainer.innerHTML = '<p>No results found.</p>';
    return;
  }

  pros.forEach(pro => {
    const card = document.createElement('div');
    card.classList.add('card');
    card.innerHTML = `
      <h2>${pro.name} (${pro.type.charAt(0).toUpperCase() + pro.type.slice(1)})</h2>
      <p><strong>Specialty:</strong> ${pro.specialty}</p>
      <p><strong>Location:</strong> ${pro.location}</p>
      <p><strong>Contact:</strong> ${pro.contact}</p>
      <p>${pro.description}</p>
    `;
    resultsContainer.appendChild(card);
  });
}

function filterResults() {
  const searchTerm = document.getElementById('search-input').value.toLowerCase();
  const typeFilter = document.getElementById('type-filter').value;

  const filtered = professionals.filter(pro => {
    const matchesSearch = pro.name.toLowerCase().includes(searchTerm) ||
                          pro.specialty.toLowerCase().includes(searchTerm) ||
                          pro.location.toLowerCase().includes(searchTerm) ||
                          pro.description.toLowerCase().includes(searchTerm);
    const matchesType = !typeFilter || pro.type === typeFilter;
    return matchesSearch && matchesType;
  });

  displayResults(filtered);
}

// Load all results on page load
window.onload = () => filterResults();
