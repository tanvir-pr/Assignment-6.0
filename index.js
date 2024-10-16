
// 1 fetch ,load and show catagories on html

// create loadCategories
const loadCategories = async() => {
        const response = await fetch ("https://openapi.programming-hero.com/api/peddy/categories")
        const data  = await response.json();
        displayCategories(data.categories)     
};

// CRATE BUTTON ID SEARCH
const singaleCategories = async() => {
    const response = await fetch ("https://openapi.programming-hero.com/api/peddy/category/dog")
    const data  = await response.json();
    addsinCategories(data.data)
    
};

// nav data daynamics
const loadDetails = async(id) => {
    // const response = await fetch (`https://openapi.programming-hero.com/api/peddy/category/${id}`)
    // const data  = await response.json();
    // addsinCategories(data.data)
    alert(id);
    // console.log(data);
};


// create displayCategories
const displayCategories = (categories) => {
    console.log(categories)
    
    const categoryContainer = document.getElementById("categoriesNav")
    
    // add data in html
    categories.forEach((pets) => {
        // console.log(pets);
        // create a button

        //  "category": "Cat",
    //   "category_icon": "https://i.ibb.co.com/N7dM2K1/cat.png"

        const buttonContainer = document.createElement("div");
    buttonContainer.innerHTML = `
      <button id="btn-${pets.id}" onclick="loadDetails('${pets.category}')" class="btn category-btn">
       ${pets.category}
      </button>
    `;
        console.log(buttonContainer);
        categoryContainer.appendChild(buttonContainer);
    });   
};


// create addsinCategories
const addsinCategories = (data) => {

const petsContainer = document.getElementById("allPets")
    
    // add data in html
    data.forEach((dat) => {

        // create a button
        const card = document.createElement("div");
        // card.classList = "cards";
        card.innerHTML = `
 <div class="">
    <div><img src="${dat.image}" alt=""></div>
    <div class="">
    <div class="text-xl "> ${dat.breed} </div>
    <div class=""><i class="fa-solid fa-table-cells-large"></i>${dat.image}</div>
    <div class=""><i class="fa-solid fa-calendar-days"></i>${dat.date_of_birth}</div>
    <div class=""><i class="fa-solid fa-mercury"></i>${dat.gender}</div>
    <div class=""><i class="fa-solid fa-dollar-sign"></i>${dat.price}</div>
    </div>
    <div class="flex justify-evenly">
      <button class=""><i class="fa-regular fa-thumbs-up"></i></button>
      <button>Adopt</button>
      <button>Details</button>
    </div>

  </div>
        `
        // console.log(card);
        petsContainer.appendChild(card);
    });   
};


singaleCategories();
loadCategories();
