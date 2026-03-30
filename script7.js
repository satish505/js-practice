
let productsData = [];
let filteredData = [];

// Fetch API
async function fetchProducts() {
  const loader = document.getElementById("loader");
  const error = document.getElementById("error");

  try {
    loader.style.display = "block";

    let res = await fetch("https://fakestoreapi.com/products");
    let data = await res.json();

    productsData = data;
    filteredData = data;

    displayProducts(data);
  } catch (err) {
    error.innerText = "Error loading data";
  } finally {
    loader.style.display = "none";
  }
}

// Display Products
function displayProducts(data) {
  const container = document.getElementById("products");
  container.innerHTML = "";

  data.forEach(p => {
    let card = `
      <div class="card">
        <img src="${p.image}">
        <h3>${p.title.substring(0, 20)}...</h3>
        <p>${p.description.substring(0, 60)}...</p>
        <button>${p.price}</button>
        <br><br>
        <button onclick="viewDetails(${p.id})">View More</button>
      </div>
    `;
    container.innerHTML += card;
  });
}

// Search Filter
document.getElementById("search").addEventListener("input", function() {
  let value = this.value.toLowerCase();

  let filtered = productsData.filter(p =>
    p.title.toLowerCase().includes(value)
  );

  filteredData = filtered;
  displayProducts(filtered);
});

// Category Filter
document.getElementById("category").addEventListener("change", function() {
  let value = this.value;

  let filtered = value === "all"
    ? productsData
    : productsData.filter(p => p.category === value);

  filteredData = filtered;
  displayProducts(filtered);
});

// Sorting
function sortLowHigh() {
  let sorted = [...filteredData].sort((a, b) => a.price - b.price);
  displayProducts(sorted);
}

function sortHighLow() {
  let sorted = [...filteredData].sort((a, b) => b.price - a.price);
  displayProducts(sorted);
}

// View Details (Modal)
function viewDetails(id) {
  let product = productsData.find(p => p.id === id);

  document.getElementById("modalData").innerHTML = `
    <h2>${product.title}</h2>
    <img src="${product.image}" height="150">
    <p>${product.description}</p>
    <h3>₹${product.price}</h3>
  `;

  document.getElementById("modal").style.display = "block";
}

function closeModal() {
  document.getElementById("modal").style.display = "none";
}

// Start
fetchProducts();