


let thepropertyContainer = document.getElementsByClassName('featuredTheProperties')[0];

Properties.forEach((x) => {

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


