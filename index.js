// Define the yogurt flavor counts array
var yogurtFlavorCounts = [0, 0, 0, 0, 0];

// Define the yogurt flavors array
var yogurtFlavors = [
  "Vanilla",
  "Strawberry",
  "Blueberry",
  "Raspberry",
  "Coffee",
];

// Function to update the count of a yogurt flavor
function updateYogurtFlavorCount(flavorIndex) {
  yogurtFlavorCounts[flavorIndex]++;
  document.getElementById("flavor-count-" + flavorIndex).innerHTML =
    yogurtFlavorCounts[flavorIndex];
}
