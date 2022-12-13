let userInput = document.querySelector("#userInput"); //grabbing user input
let searchList = document.querySelector(".list-group"); //created to grab list

const options = [
  { name: "Fox", link: "https://www.fox.com" },
  { name: "Fandango", link: "https://fandango.com" },
  { name: "CNN", link: "https://cnn.com" },
];

//event that happens when search button is pressed
document.querySelector(".userInput").addEventListener("change", (e) => {
  e.preventDefault();
});

//search array of objects
const searchTask = () => {
  let input = searchBox.value.toLowerCase();
  options.filter((word) => word.name.toLowerCase().indexOf(input) !== -1);
  //display searched words
  let searchBoxResults = document.createElement("li");
  searchBox.innerHTML = `<a href="${word.link}">${word.name}</a>`;
  console.log(searchBoxResults);
};

const displaySearchList = (searched) => {};
