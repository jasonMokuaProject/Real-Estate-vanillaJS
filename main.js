


let thepropertyContainer = document.getElementsByClassName('featuredTheProperties')[0];

let countProperties = 0;

for (let x = 0; x < 8; x++) {

    thepropertyContainer.innerHTML += `  <div class="PropertyItem" id="${Properties[x].id}">
    <img src="${Properties[x].image}" width="300px" height="200px">
    <div class="description-item">
        <p class="price-of-item">£${Properties[x].price}</p>
        <p class="property-type-item">${Properties[x].propertyType}</p>
        <p class="Location-item">${Properties[x].location}</p>
        <button> Request Information</button> <button> View details</button>
    </div>

   </div>`;



}





let location_result = document.getElementById('location');

let price_result = document.getElementById('thepriceselected');


let saleOrent = document.getElementById('ForSaleOrRent');


let property_type_result = document.getElementById('property_type_result');

let thepropertyitems = document.getElementsByClassName('PropertyItem');

function Searchforresult() {
    let p = 0;
    while (p < thepropertyitems.length) {
        thepropertyitems[p].style.display = "none";
        p++;
    }

    console.log(location_result.value, price_result.value, saleOrent.value, property_type_result.value);


    if (property_type_result.value == "Property Type") {
        property_type_result.value = " ";

    }

    if (price_result.value == "Select minimum Price") {
        price_result.value = 0;

    }

    // Price
    let TotalSearch = Properties.filter((x) => {
        return x.price > price_result.value;

    });



    // location
    TotalSearch = TotalSearch.filter((x) => {
        return x.location.match(location_result.value);

    });

    // property type
    TotalSearch = TotalSearch.filter((x) => {

        return x.propertyType.match(property_type_result.value);

    });




    // Rent or sale
    TotalSearch = TotalSearch.filter((x) => {
        return x.SaleOrRent.match(saleOrent.value);

    });







    TotalSearch.forEach((x) => {

        thepropertyContainer.innerHTML += `  <div class="PropertyItem" id="${x.id}">
    <img src="${x.image}" width="300px" height="200px">
    <div class="description-item">
        <p class="price-of-item">£${x.price}</p>
        <p class="property-type-item">${x.propertyType}</p>
        <p class="Location-item">${x.location}</p>
        <button> Request Information</button> <button> View details</button>
    </div>

   </div>`;


    });
    let i = 0;
    while (i < TotalSearch.length) {

        thepropertyitems[p].style.display = "block";
        i++;
        p++;
    }

}


