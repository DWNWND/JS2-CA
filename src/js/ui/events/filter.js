/// FROM OLD CA:

// async function displayCategorizedProducts() {
//   //loading indicator
//   showLoadingIndicator(productList);

//   //loading the right Main shopping cart icon when loading the page
//   updateMainShoppingCart();

//   //fetching API
//   const product = await fetchJackets();

//   //Filter categories - using selectedCategory (WORKING)
//   let productsCategoriesed = product.filter((allItems) => {
//     if (allItems.categories[0].name.toLowerCase() === theTrueCategoryName.toLowerCase()) {
//       return allItems;
//     }
//     if (selectedCategory.toLowerCase().includes("on sale") && allItems.on_sale) {
//       return allItems;
//     }
//     if (selectedCategory.toLowerCase().includes("new in") && allItems.favorite) {
//       return allItems;
//     }
//   });
// }
