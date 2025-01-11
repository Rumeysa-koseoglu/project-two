let products = {
    data:[{
        productName: "Regular White T-Shirt",
        category: "Topwear",
        price: "30",
        image: "white-tshirt.jpeg"
    },
    {
        productName: "Begie Short Skirt",
        category:"Bottomwear",
        price:"49",
        image:"short-skirt.jpeg",
    },
    {
        productName: "Sporty SmartWatch",
        category:"Watch",
        price:"99",
        image:"sporty-smartwatch.jpeg",
    },
    {
        productName: "Basic Knitted Top",
        category:"Topwear",
        price:"29",
        image:"knitted-top.jpeg",
    },
    {
        productName: "Black Leather Jacket",
        category:"Jacket",
        price:"129",
        image:"black-leather-jacket.jpeg",
    },
    {
        productName: "Stylish Pink Trousers",
        category:"Bottomwear",
        price:"89",
        image:"pink-trousers.jpeg",
    },
    {
        productName: "Brown Men's Jacket",
        category:"Jacket",
        price:"189",
        image:"brown-jacket.jpeg",
    },
    {
        productName: "Comfy Gray Pants",
        category:"Bottomwear",
        price:"49",
        image:"comfy-gray-pants.jpeg",
    },
],
};

for(let i of products.data){
    //create card // Create a new <div> element and store it in the 'card' variable
    let card = document.createElement("div");
    //card should have category and should stay hidden initially
    // Add the classes "card", the value of i.category, and "hide" to the 'card' element
    card.classList.add("card", i.category, "hide");
    //image div
// Create a new <div> element, store it
//  in 'imgContainer', and add the class "image-container" to it
    let imgContainer = document.createElement("div");
    imgContainer.classList.add("image-container");
    //img tag
    // Create a new <img> element
    //  and set its "src" attribute to i.image
    let image = document.createElement("img");
    image.setAttribute("src", i.image);
    // Add the <img> element to the 'imgContainer' div
    imgContainer.appendChild(image);
    // Add the 'imgContainer' div to the 'card' element
    card.appendChild(imgContainer);
    //container
    // Create a new <div> element, store it
    //  in 'container', and add the class "container" to it
    let container = document.createElement("div");
    container.classList.add("container");
    //product name
    // Create a new <h5> element and
    //  add the class "product-name" to it
    let name = document.createElement("h5");
    name.classList.add("product-name");
    // Set the text of the <h5> element to
    //  the uppercase version of i.productName
    name.innerText = i.productName.toUpperCase();
    // Add the <h5> element to the 'container' div
    container.appendChild(name);
    //price..
// Create a new <h6> element and set its text
//  to display the price with a dollar sign
    let price = document.createElement("h6");
    price.innerText = "$" + i.price;
    // Add the <h6> element to the 'container' div
    container.appendChild(price);
// Add the 'container' div to the 'card' element
    card.appendChild(container);
    // Add the 'card' element to the element with the ID "products"
    document.getElementById("products").appendChild(card);
}


//parameter passed from button (Parameter same as category)
// Function to filter products based on the selected
//  category (value passed from button)
function filterProduct(value){
    // Button class code..
    // Get all buttons with the class "button-value"
    let buttons = document.querySelectorAll(".button-value");
    // Go through each button
    buttons.forEach((button) => {
//check if value equals innerText..
 // Check if the value matches the
 //  button's text (case doesn't matter)
if (value.toUpperCase() == button.innerText.toUpperCase()) {
     // Add the "active" class to the button if it matches
    button.classList.add("active");
}
else{
     // Remove the "active" class if the button doesn't match
    button.classList.remove("active");
}
    });

    //select all cards
    let elements = document.querySelectorAll(".card");
    //loop through all cards
    elements.forEach((element) => {
        //display all cards on 'all' button click
        if (value == "all"){
            element.classList.remove("hide");
        }
        else{
            //check if element contains category class
            if(element.classList.contains(value)){
                //display element based on category 
                element.classList.remove("hide");
            } else{
                //hide other elements
                element.classList.add("hide");
            }
        }
    });
}


//wheh the searc button is clicked
document.getElementById("search").addEventListener("click", () => {
    //initializations..
    // Get the value entered in the search input
    let searchInput = document.getElementById("search-input").value;
    // Get all product name elements and card elements
    let elements = document.querySelectorAll(".product-name");
    let cards = document.querySelectorAll(".card");

    //loop through all elements..
    //go through each product name element
    elements.forEach((element,index) => {
        //check if product name includes the search input (case doesn't matter)
        if(element.innerText.includes(searchInput.toUpperCase())){
            //display matching card / show the matching card
            cards[index].classList.remove("hide");
        }
        else{
            //hide others / hide the card if it doesn't match
            cards[index].classList.add("hide");
        }

    });
});


//Initially display all products
window.onload = () => {
filterProduct("all");
};
