const popupOverlay = document.getElementById("popup1");
const formSubmitButton = document.getElementById("form-submit");
const popupCloseButton = document.getElementById("close-btn");
const popupHeading = document.getElementById("popup-heading");
const popupContent = document.getElementById("popup-content");

let tables = [];
const numberOfTables = 15;

formSubmitButton.addEventListener('click', (event) => {
    event.preventDefault();// prevent from reload
    let bookedTable = Number(document.getElementById("table-no").value);
    
    if( bookedTable > 0 && bookedTable <= numberOfTables && tables.indexOf(bookedTable) === -1 ) {
        popupHeading.innerHTML = "Thank You";
        popupContent.innerHTML = "Thank you for choosing us your table has been booked";
        tables.push(bookedTable)
    } else {
        popupHeading.innerHTML = "Fuck";
        popupContent.innerHTML = "Sorry, we are at our full capacity your table can't be booked right now and your money will not be refunded";
    }

    popupOverlay.classList.remove("hidden");
})

popupCloseButton.addEventListener('click', ( event) => {
    event.preventDefault()
    popupOverlay.classList.add("hidden");
})






