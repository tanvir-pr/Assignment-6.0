
// sort order by price

const sortingId = () => {
    fetch("https://openapi.programming-hero.com/api/peddy/pets")
        .then(response => response.json())
        .then(data => {
            const sortedData = data.pets.sort((a, b) => b.price - a.price);
            addsinCategories(sortedData);
        })
        .catch(error => console.error("Error:", error));
};

// 1 fetch ,load and show catagories on html

// create loadCategories
const loadCategories = async () => {
    document.getElementById("loader").style.display = "none";

        const response = await fetch ("https://openapi.programming-hero.com/api/peddy/categories")
        const data  = await response.json();
    displayCategories(data.categories)   
    
};

// CRATE BUTTON ID SEARCH
const singaleCategories = async() => {
    const response = await fetch ("https://openapi.programming-hero.com/api/peddy/pets")
    const data  = await response.json();
    addsinCategories(data.pets)
   
};

// nav data daynamics
const loadDetails = async (category) => {
    document.getElementById("removeSection").style.display = "none";
    document.getElementById("loader").style.display = "block";
    

    setTimeout(function () {
        loadAllPhone(data)
    }, 2000)


    const response = await fetch (`https://openapi.programming-hero.com/api/peddy/category/${category}`)
    const data = await response.json();
    
        // sobaike active class k remove koro
        removeActiveClass();
        // ID er class ke active koro
        const activeBtn = document.getElementById(`btn-${category}`);
        activeBtn.classList.add("active")
        // addsinCategories(data.data)

};

// removeActiveClass er function
const removeActiveClass = () => {
    const buttons = document.getElementsByClassName("category-btn")
    for (let btn of buttons) {
        btn.classList.remove("active");
    }
};






const loadAllPhone = async(data) => {
    console.log("wow 3 sec done");
    document.getElementById("removeSection").style.display = "block";
    document.getElementById("removeSection").style.display = "flex";
    document.getElementById("loader").style.display = "none";
    // document.getElementById("removeSection").add();

        addsinCategories(data.data)

};

function main(category) {
    // handlesearch();
    ;
    console.log(main);
}


// create displayCategories
const displayCategories = (categories) => {
    
    const categoryContainer = document.getElementById("categoriesNav")
    
    // add data in html
    categories.forEach((pets) => {
        // console.log(pets);
        // create a button

        //  "category": "Cat",
    //   "category_icon": "https://i.ibb.co.com/N7dM2K1/cat.png"

        const buttonContainer = document.createElement("div");
    buttonContainer.innerHTML = `
      <button id="btn-${pets.category}"  onclick="loadDetails('${pets.category}')" class="btn category-btn px-5">
      <img class="h-8 " src="${pets.category_icon}" alt="" />
       ${pets.category}
      </button>
    
    `;
        categoryContainer.appendChild(buttonContainer);
    });   
};
// detailshow id 
const seenDetsils = async(deatilsIdd) => {
    console.log(deatilsIdd);
    const uri = `https://openapi.programming-hero.com/api/peddy/pet/${deatilsIdd}`
    const res = await fetch(uri);
    const data = await res.json();
    displayDetailsIdSeen(data.petData)
    
}

const displayDetailsIdSeen = (petData) => {
    console.log(petData);
    const detailContainer = document.getElementById("modal-content");
    document.getElementById("my_modal_5").showModal();
    detailContainer.innerHTML = `
    <div class="border-gray-200 rounded-md p-5 border-2	">
    <div><img class="rounded-md" src="${petData.image}" alt=""></div>
    <div class="">
    <div class="text-xl "> ${petData.pet_name} </div>
   <div class=" flex flex-row gap-10 py-5">
    <div>
    <div class=""><i class="fa-solid fa-table-cells-large"></i> Breed : ${petData.breed}</div>
    <div class=""><i class="fa-solid fa-mercury"></i> Gender : ${petData.gender}</div>
    <div class=""><i class="fa-solid fa-mercury"></i> Gender : ${petData.vaccinated_status}</div>
    </div>

    <div>
    <div class=""><i class="fa-solid fa-calendar-days"></i> Birth : ${petData.date_of_birth}</div>
    <div class="pb-3"><i class="fa-solid fa-dollar-sign"></i> Price : ${petData.price}</div>
    </div>
   </div>
    <hr class="pb-3" />
    </div>
    <div class="">
    <h1>Details Information</h1>
     <h2>${petData.pet_details}</h2>
    </div>

  </div>
    `
}


// picshowbtn pic dekhano lagbe

const picShowBtn = (dat) => {
    console.log(dat);
    const picSet = document.getElementById("likebutton");
    const divContainer = document.createElement("div");
    divContainer.innerHTML = `<img class="border-gray-200 rounded-md p-5 border-2" src="${dat}" alt="" />`;
    picSet.appendChild(divContainer);
    

}

// modal e cutdwon dekhano
const reverseCountdown = () => {
    const timerCountdownId = document.getElementById("countTimerid");
   const modalShowId =   document.getElementById("mytime");
    let timeLeft = 3;
    timerCountdownId.innerText = timeLeft
    const interval = setInterval(() => {
      console.log(timeLeft); // Display the countdown number                   
        timeLeft--;
        timerCountdownId.innerText = timeLeft
        
       
        if (timeLeft <= 0) {
            modalShowId.close();
        clearInterval(interval);
        
        
      }
    }, 1000); // Runs every 1 second
   
  }



const modalSetDwon = () => {
    console.log()
    const timeContainer = document.getElementById("modalContent");
    document.getElementById("mytime").showModal();
    reverseCountdown();
    timeContainer.innerHTML = `
    <div>
    <h1 class="text-center text-2xl font-bold">Congrates</h1>
    <h3 class="text-center text-2xl font-semibold">Adoption process is start for your pet</h3>
    </div>
    
    `;
    
}

// create addsinCategories
const addsinCategories = (pets) => {

const petsContainer = document.getElementById("allPets")
    petsContainer.innerHTML = "";

    if (pets.length == 0) {
        petsContainer.classList.remove("grid")
        petsContainer.innerHTML = `
       <div class="flex justify-center flex-col text-center items-center">
      <div class="justify-center"> <img  src="./images/error.webp" alt="" /></div>
       <h2 class="text-2xl font-bold ">No information Avaialble</h2>
       <h5 class="text-slate-500">Now at this time , there are no birds available here. Please contact us our helpline number. Almost 5 days we can sell birds </h5>
       </div>
        `
    }
    else {
        petsContainer.classList.add("grid")
    }
    // add data in html
    pets.forEach((dat) => {
        // create a button
        const card = document.createElement("div");
        // card.classList = "cards";
      
        card.innerHTML = `
 <div class="border-gray-200 rounded-md p-5 border-2	">
    <div><img class="rounded-md" src="${dat.image}" alt=""></div>
    <div class="">
    <div class="text-xl "> ${dat.breed ? dat.breed : 'Not Available'} </div>
    <div class=""><i class="fa-solid fa-table-cells-large"></i></div>
    <div class=""><i class="fa-solid fa-calendar-days"></i> Birth : ${dat.date_of_birth ? dat.date_of_birth : 'Not Available'}</div>
    <div class=""><i class="fa-solid fa-mercury"></i> Gender : ${dat.gender ? dat.gender : 'Not Available'}</div>
    <div class="pb-3"><i class="fa-solid fa-dollar-sign"></i> Price : ${dat.price ? dat.price : 'Not Available' }</div>
    <hr class="pb-3" />
    </div>
    <div class="flex justify-evenly">
      <button onclick="picShowBtn('${dat.image}')" class="btn btn-outline"><i class="fa-regular fa-thumbs-up"></i></button>
      <button onclick="modalSetDwon()" class="btn btn-outline">Adopt</button>
      <button onclick="seenDetsils('${dat.petId}')" class="btn btn-outline">Details</button>
    </div>

  </div>
        `
        // console.log(card);
        petsContainer.appendChild(card);
    });   
};


singaleCategories();
loadCategories();
