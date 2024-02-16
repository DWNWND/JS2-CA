
// async function displaySearchedProducts() {
//   //Filter from searchbar
//   let query = searchInput.value;

//   //loading indicator
//   showLoadingIndicator(productList);

//   //loading the right Main shopping cart icon when loading the page
//   updateMainShoppingCart();

//   //fetching API
//   const product = await fetchJackets();
//   console.log(product.categories[0].name.toLowerCase());

//   //Filter categories - using selectedCategory (WORKING)
//   let productsCategoriesed = product.filter((allItems) => {
//     if (allItems.categories[0].name.toLowerCase().includes(theTrueCategoryName.toLowerCase())) {
//       return allItems;
//     }
//     if (selectedCategory.toLowerCase().includes("on sale") && allItems.onSale) {
//       return allItems;
//     }
//     if (selectedCategory.toLowerCase().includes("new in") && allItems.favorite) {
//       return allItems;
//     }
//   });

//   //Filter items - from using searchbar (WORKING IN LIST VIEW) - Also takes the categories into consideration
//   let productsFiltered = product.filter((allItems) => {
//     if (query === "") {
//       h1.innerHTML = theTrueCategoryName;
//       return productsCategoriesed;
//     } else if (allItems.title.toLowerCase().includes(query.toLowerCase())) {
//       h1.innerHTML = "Search results";
//       return allItems;
//     }
//   });

//   //clearing loading indicator
//   productList.innerHTML = "";

//   // looping through results
//   renderProducts(productsFiltered);

//   //add items to cart
//   const addToCartButton = document.querySelectorAll(".shopping-bag");
//   addToCartButton.forEach((cartButtons) => {
//     cartButtons.addEventListener("click", eventSaveLocallyList);
//   });
// }