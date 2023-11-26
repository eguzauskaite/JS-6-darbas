// Naudojantis html, css ir javascript, sukurti lentelę, kuri informaciją gaudama iš input pridėtų naują informaciją pagal pavyzdį.

// Pridėti sąlygą, kuri neleistų pridėti į lentelę naujų duomenų ir išmestų įsėjimą per alert(), kol nėra nurodytą bent vieną iš trijų duomenų.

// Sukoduoti, kad paspaudus mygtuką pridėti ir pridėjus duomenis, anksčiau įrašyta informaciją į input, iš jų išsitrintų. Naudoti elemento.value = “ ” elementų pridėjimo funkcijoje.



// Papildomai:

// Sukoduoti pirmo ir paskutinio elemento ištrynimą.

// Sukoduoti, kad neleistų pridėti duomenų kol amžius mažesnis arba lygus nuliui.
pavyzdys: https://www.loom.com/share/9f57e23cbbf74940b0dd1526d71151d2

function addData() {
    var firstName = document.getElementById("firstName").value;
    var lastName = document.getElementById("lastName").value;
    var age = document.getElementById("age").value;

    // Check if any of the input fields is empty
    if (firstName === "" || lastName === "" || age === "") {
        alert("Užpildykite visus duomenis!");
        return;
    }

    // Check if age is greater than zero
    if (parseInt(age) <= 0) {
        alert("Amžius turi būti didesnis nei nulis!");
        return;
    }

    // Access the table
    var table = document.getElementById("dataTable");

    // Add a new row with the input values
    var row = table.insertRow(table.rows.length);
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);
    cell1.innerHTML = firstName;
    cell2.innerHTML = lastName;
    cell3.innerHTML = age;

    // Clear input fields
    document.getElementById("firstName").value = "";
    document.getElementById("lastName").value = "";
    document.getElementById("age").value = "";
}

// Function to delete the first row of the table
function deleteFirst() {
    var table = document.getElementById("dataTable");
    if (table.rows.length > 1) {
        table.deleteRow(1);
    }
}

// Function to delete the last row of the table
function deleteLast() {
    var table = document.getElementById("dataTable");
    var lastRow = table.rows.length - 1;
    if (lastRow > 0) {
        table.deleteRow(lastRow);
    }
}