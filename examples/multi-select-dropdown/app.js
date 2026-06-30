const menu = {
  drinks: ["Water", "Tea", "Sweet Tea", "Coke", "Dr. Pepper", "Sprite"],
  entrees: [
    "Hamburger w/ Fries",
    "Grilled Cheese w/ Tater Tots",
    "Grilled Chicken w/ Veggies",
    "Chicken Fried Steak w/ Mashed Potatoes",
    "Fried Shrimp w/ Coleslaw",
    "Veggie Plate",
  ],
  desserts: ["Cheesecake", "Chocolate Cake", "Snickerdoodle Cookie"],
};

// Get the dropdown and listbox elements
const categoryDropdown = document.getElementById("category");
const menuListbox = document.getElementById("menu-items");
// Define the event handler for the category dropdown
function updateListbox() {
  // Clear the listbox
  menuListbox.innerText = "";
  // Get the selected category
  const selectedCategory = categoryDropdown.value;
  // If a category is selected, populate the listbox
  if (selectedCategory) {
    const categoryItems = menu[selectedCategory];
    categoryItems.forEach((item) => {
      const option = document.createElement("option");
      option.text = item;
      menuListbox.add(option);
    });
  }
}