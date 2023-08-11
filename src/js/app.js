const { products, categories } = window;

// Here, we create arrays of descriptions for different categories of Ferraris
let SupercarsArr = [];
let GTCarsArr = [];
let ConvertibleArr = [];

for (let i = 0; i < products.length; i++) {
  products[i].categories.forEach(function (element) {
    if (element === "SUPERCARS" && products[i].discontinued === false) {
      SupercarsArr.push(products[i].description);
    } else if (element === "GT-CARS" && products[i].discontinued === false) {
      GTCarsArr.push(products[i].description);
    } else if (element === "CONVERTIBLE" && products[i].discontinued === false) {
      ConvertibleArr.push(products[i].description);
    }
  });
}

// Creating the navbar dynamically
let menu = document.getElementById("menu");
for (let i = 0; i < categories.length; i++) {
  let newMenuItem = document.createElement("button");
  newMenuItem.textContent = categories[i].name;
  newMenuItem.id = categories[i].id;
  menu.appendChild(newMenuItem);
}

// Prints the description of product
function descriptionPrinter(category) {
  // Whenever the user clicks on an element, the program prints the description of the product to the console
  let tableRows = document.getElementsByClassName("tbl-row");

  // Using the length as per the category and printing description by using the parallel array concept
  if (category === "SUPERCARS") {
    for (let i = 0; i < SupercarsArr.length; i++) {
      tableRows[i].addEventListener("click", function () {
        console.log(SupercarsArr[i]);
      });
    }
  } else if (category === "GT-CARS") {
    for (let i = 0; i < GTCarsArr.length; i++) {
      tableRows[i].addEventListener("click", function () {
        console.log(GTCarsArr[i]);
      });
    }
  } else if (category === "CONVERTIBLE") {
    for (let i = 0; i < ConvertibleArr.length; i++) {
      tableRows[i].addEventListener("click", function () {
        console.log(ConvertibleArr[i]);
      });
    }
  }
}

// Creates all the cells for a particular category
function createCells(category) {
  // Fetching the tbody element
  var tbodyRef = document.getElementById("categoryProducts");
  var newRow, newCell, newText;

  // Iterating through the products and creating rows
  for (let i = 0; i < products.length; i++) {
    // creates a table row
    newRow = tbodyRef.insertRow();
    newRow.className = "tbl-row";

    // Iterating over array
    products[i].categories.forEach(function (element) {
      if (element === category && products[i].discontinued === false) {
        // Insert a cell at the end of the row
        newCell = newRow.insertCell();
        // Append a text node to the cell
        newText = document.createTextNode(products[i].title);
        newCell.appendChild(newText);

        // Insert a cell at the end of the row
        newCell = newRow.insertCell();
        newCell.id = i;
        // Append a text node to the cell
        newText = document.createTextNode(products[i].description);
        newCell.appendChild(newText);

        // Insert a cell at the end of the row
        newCell = newRow.insertCell();
        // Append a text node to the cell
        newText = document.createTextNode(
          (products[i].price / 100).toLocaleString("en-CA", { currency: "CAD", style: "currency" })
        ); // Converting to Canadian Currency
        newCell.appendChild(newText);
      }
    });
  }
}
function createProductCard(product) {
  const card = document.createElement("div");
  card.classList.add("card");

  const productImage = document.createElement("img");
  productImage.src = product.imageUrl;
  productImage.classList.add("card-image");
  card.appendChild(productImage);

  const titleElement = document.createElement("h3");
  titleElement.textContent = product.title;
  card.appendChild(titleElement);

  const descriptionElement = document.createElement("p");
  descriptionElement.textContent = product.description;
  card.appendChild(descriptionElement);

  const priceElement = document.createElement("span");
  priceElement.textContent = (product.price / 100).toLocaleString("en-CA", { currency: "CAD", style: "currency" });
  card.appendChild(priceElement);

  return card;
}

// Display Supercars by default
document.getElementById("categoryProducts").innerHTML = "";
document.getElementById("selected-category").textContent = "Supercars";
createCells("SUPERCARS");

// Function that shows a product list based on category and update the heading
function showProductList(category) {
  // Clearing all the elements so that they dont stay
  document.getElementById("categoryProducts").innerHTML = "";

  // Creating cells for categories
  createCells(category);
  descriptionPrinter(category);
}

// Change the heading and show product list
let menuArr = document.querySelector("#menu").querySelectorAll("button");
for (let i = 0; i < menuArr.length; i++) {
  menuArr[i].addEventListener("click", function () {
    document.getElementById("selected-category").innerHTML = menuArr[i].textContent;
    showProductList(menuArr[i].id); // Using category ID as argument
  });
}

// As the default category is Supercars, we call the function by passing 'SUPERCARS' as the category
descriptionPrinter("SUPERCARS");
